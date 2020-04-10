<template lang="pug">
        .docs.flex.flex-col.md_flex-row
            .panel.flex-1.bg-grey.py-4.px-8.pb-10.flex.justify-center.md_justify-end
                .panel-content.flex.flex-col.items-center.md_items-stretch
                  input.px-2.py-1.mt-6(
                      id="search"
                      type="text" 
                      class="input",
                      v-model="searchTerm"
                      placeholder="Search"
                  )
                  .p-1
                  .md_ml-2(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                      a(:href="'#' + edge.node.id")
                          p.mt-4.text-sm.font-bold.uppercase(v-if="(edge.node.id % 10.0) == 0") {{ edge.node.title }}
                          p.md_ml-4.mt-2.text-sm(v-else) {{ edge.node.title }}
            .container.flex.mx-auto          
                  .content.container.p-12.md_px-24.lg_px-32.xl_px-48.justify-center   
                      div.mb-12(v-if="searchTerm != '' && searchResults.length == 0")
                        h1 Not Found
                      div(v-else v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                        div.mb-12(v-if="searchTerm == ''" v-html="edge.node.content" :id="edge.node.id")
                        div.mb-12(v-if="getResult(edge.node)" v-html="getResult(edge.node).content" :id="getResult(edge.node).id")

            .flex-1

</template>

<page-query>
query {
  allGuidePost(sortBy: "id", order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        path
        content
      }
    }
  }
}
</page-query>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin'

export default {
  metaInfo: {
    title: 'Guide'
  },
  mixins: [
    Search
  ],
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm

      if (searchTerm.length < 1) {
        return []
      }

      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  },
  methods: {
    getResult(node) {
      const searchTerm = this.searchTerm.trim()

      for (const item of this.searchResults) {
        if (item.id != node.id) {
          continue
        }

        let filteredContent = Array.from(node.content)
        let stack = []

        for (let index = 0; index < filteredContent.length; index++) {
            let char = filteredContent[index]

            if (stack.length != 0) {
              filteredContent[index] = ''

              if (char == '>') {
                stack.pop()
              }

              continue
            }
            
            if (char == '<') {
              stack.push('<')
              filteredContent[index] = ''
            }
        }

        let content = node.content
        let contentIndex = -1
        let extra = 0

        while ((contentIndex = content.indexOf(searchTerm, contentIndex)) !== -1) {
          if (filteredContent[contentIndex - extra] == '') {
            contentIndex += searchTerm.length
            continue
          }

          const term = content.substr(contentIndex, searchTerm.length)
          const wrapped = '<span style="font-weight: bold; background-color: yellow;">' + term + '</span>'
          content = content.slice(0, contentIndex) + wrapped  + content.slice(contentIndex + term.length)
          contentIndex += wrapped.length
          extra += (wrapped.length - term.length)
        }

        return ({
          id: node.id,
          title: node.title,
          content: content
        })
      }

      return null
    }
  }
};
</script>

<style lang="stylus">
.panel input:focus
  border-radius 0
  color black

.search-element
  font-family 'Montserrat'

.content
  h1, h2, h3, h4, h5
    @apply py-6
    padding-top 100px
    margin-top -70px

  h1
    @apply text-3xl

  ul
    @apply list-disc
    @apply list-inside
    @apply py-4
    @apply px-6

  code
    @apply text-sm

  a
    @apply text-blue-500


</style>
