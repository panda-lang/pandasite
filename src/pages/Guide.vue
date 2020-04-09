<template lang="pug">
    .container
        .docs.flex.flex-col.md_flex-row
            .panel.bg-grey.py-4.px-12.pb-10
                input.px-2.py-1.mt-6(
                    id="search"
                    type="text" 
                    class="input",
                    v-model="searchTerm"
                    placeholder="Search"
                )
                .hint
                  .list.absolute.bg-white
                    hr.my-4.mx-2
                    a(
                        v-for="result in searchResults"
                        :key="result.id + 'search-link'"
                        :href="'#' + result.id"
                        class="navbar-item"
                    )
                      .px-2
                        h4 {{ result.title }}
                        p {{ result.content }}
                        hr.my-4
                .p-1
                div.ml-2(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                    a(:href="'#' + edge.node.id")
                        p.mt-4.text-sm.font-bold.uppercase(v-if="(edge.node.id % 10.0) == 0") {{ edge.node.title }}
                        p.ml-4.mt-2.text-sm(v-else) {{ edge.node.title }}    
            .container.justify-center                    
                .content.p-12
                    div(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                        div.mb-12(v-html="edge.node.content" :id="edge.node.id")
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

      let items = this.$search.search({ query: searchTerm, limit: 5 })
      let cloned = []

      for (let index = 0; index < items.length; index++) {
        const item = items[index]
        const content = item.content
        const termIndex = content.indexOf(searchTerm)
        
        let start = termIndex - 20
        start = (start < 0) ? 0 : start;

        const text = content.substr(start, 40)
        console.log(termIndex, termIndex-5, termIndex+5, content.length, text.length, text)

        cloned.push({
          id: item.id,
          title: item.title,
          content: text
        })
      }

      console.log(cloned)
      return cloned
    } 
  }
};
</script>

<style lang="stylus">
.content {
  h1, h2, h3, h4, h5 {
    // @apply px-6
    @apply: py-6;
    padding-top: 100px;
    margin-top: -70px;
  }

  h1 {
    @apply: text-3xl;
  }

  ul {
    @apply: list-disc;
    @apply: list-inside;
    @apply: py-4;
    @apply: px-6;
  }

  code {
    @apply: text-sm;
  }

  a {
    @apply: text-blue-500;
  }
}
</style>
