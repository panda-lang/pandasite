<template lang="pug">
  .guide.flex
      .panel.bg-grey.justify-end.hidden.md_flex
        .panel-right.panel-width
          .panel-content.flex.flex-col.items-center.md_items-start.overflow-auto.panel-width.pl-8
            input.px-2.py-1.md_mt-14.mb-3(
                id="search"
                type="text" 
                class="input", v-model="searchTerm" placeholder="Search"
            )
            .list.pb-16
              .md_pl-2(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id").w-full
                a(:href="'#' + edge.node.id")
                  p.mt-4.text-sbase.font-bold.uppercase(v-if="(edge.node.id % 100.0) == 0") {{ edge.node.title }}
                  p.md_ml-4.mt-2.text-sbase(v-else) {{ edge.node.title }}
      .guide-content.markdown.flex-1.p-6.md_p-24.pt-7.justify-center.mb-40.overflow-x-auto
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

export default {
  metaInfo () {
    return {
      title: 'Guide - Pandasite',
      meta: [
        this.social(
          'description',
          'Guide will give you an overview of the language. Set up a Panda development environment and write yuor first app.'
        )
      ]
    }
  },
  mixins: [Search],
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm

      if (searchTerm.length < 1) {
        return []
      }

      return this.$search.search({ query: searchTerm, limit: 5 })
    }
  },
  methods: {
    normalize (title) {
      return title.toLowerCase().replace(' ', '-')
    },
    getResult (node) {
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

        while (
          (contentIndex = filteredContent.indexOf(searchTerm, contentIndex)) !==
          -1
        ) {
          if (filteredContent[contentIndex] == ' ') {
            contentIndex += searchTerm.length
            continue
          }

          const term = content.substr(contentIndex + extra, searchTerm.length)
          const wrapped =
            '<span style="font-weight: bold; background-color: yellow;">' +
            term +
            '</span>'
          content =
            content.slice(0, contentIndex + extra) +
            wrapped +
            content.slice(contentIndex + extra + term.length)

          extra += wrapped.length - term.length
          contentIndex += term.length
        }

        return {
          id: node.id,
          title: node.title,
          content: content
        }
      }

      return null
    }
  }
}
</script>

<style lang="stylus">
.panel
  width calc(290px + (100% - 1280px)/2)
  min-width 290px
  min-height 900px

.panel input:focus
  border-radius 0
  color black

.panel-width
  width 290px

.panel-content
  height calc(100vh - 3.5rem)
  top 3.5rem

  position fixed
  @supports (position: sticky)
    position sticky

  .list
    a
      color black

.search-element
  font-family 'Montserrat'

.guide-content
  width calc(100% - 290px)
  max-width 1010px
</style>
