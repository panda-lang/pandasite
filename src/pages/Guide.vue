<template lang="pug">
  .guide.flex
      .panel.bg-grey.py-4.px-8.pb-10.flex.justify-center.md_justify-end
        .panel-content.flex.flex-col.items-center.md_items-stretch.fixed
          input.px-2.py-1.mt-11(
              id="search"
              type="text" 
              class="input",
              v-model="searchTerm"
              placeholder="Search"
          )
          .p-1
          .md_ml-2(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
            a(:href="'#' + edge.node.id")
              p.mt-4.text-sbase.font-bold.uppercase(v-if="(edge.node.id % 10.0) == 0") {{ edge.node.title }}
              p.md_ml-4.mt-2.text-sbase(v-else) {{ edge.node.title }}
      .content.p-24.pt-7.justify-center   
          div(v-if="searchTerm != '' && searchResults.length == 0")
            h1 Not Found
          div(v-else v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
            div(v-if="searchTerm == ''" v-html="edge.node.content" :id="edge.node.id")
            div(v-if="getResult(edge.node)" v-html="getResult(edge.node).content" :id="getResult(edge.node).id")
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
import '~/assets/prism-ghcolors.styl'
import '~/assets/prism-languages.js'

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
      const searchTerm = this.searchTerm.trim().toLowerCase()

      for (const item of this.searchResults) {
        if (item.id != node.id) {
          continue
        }

        let filteredContent = Array.from(node.content.toLowerCase())
        let stack = []

        for (let index = 0; index < filteredContent.length; index++) {
            let char = filteredContent[index]

            if (stack.length != 0) {
              filteredContent[index] = ' '

              if (char == '>') {
                stack.pop()
              }

              continue
            }
            
            if (char == '<') {
              stack.push('<')
              filteredContent[index] = ' '
            }
        }

        filteredContent = filteredContent.join('')
        let content = node.content
        let contentIndex = -1
        let extra = 0

        while ((contentIndex = filteredContent.indexOf(searchTerm, contentIndex)) !== -1) {
          if (filteredContent[contentIndex] == ' ') {
            contentIndex += searchTerm.length
            continue
          }

          const term = content.substr(contentIndex + extra, searchTerm.length)
          const wrapped = '<span style="font-weight: bold; background-color: yellow;">' + term + '</span>'
          content = content.slice(0, contentIndex + extra) + wrapped  + content.slice(contentIndex + extra + term.length)

          extra += (wrapped.length - term.length)
          contentIndex += term.length
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
.panel 
  width calc(290px + (100% - 1280px)/2)
  min-width 290px

.panel input:focus
  border-radius 0
  color black

.search-element
  font-family 'Montserrat'

.content
  width calc(100% - 290px)
  max-width 1010px

  h1 
    padding-top 124px
    margin-top -100px
    padding-bottom 20px
    @apply text-3xl

  h2
    padding-top 84px
    margin-top -60px
    padding-bottom 20px

  h3, h4, h5
    padding-top 64px
    margin-top -50px
    padding-bottom 12px
    color #808080

  p
    @apply my-2

  ul
    @apply list-disc
    @apply list-inside
    @apply py-4
    @apply px-6

  pre
    @apply my-5
    //background-color #19191c
    code
      background-color transparent
      color inherit

  code
    @apply text-sm
    @apply bg-grey
    //@apply text-green-600
    @apply my-6
    color #dd157c

  a
    @apply text-theme-download
</style>
