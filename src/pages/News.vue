<template lang="pug">
    .news-list
        div.container.mx-auto.pt-10.bg-white
            div.mx-12.pb-24
                div.text-center  
                  h1.text-3xl.align-center Panda News
                  div.flex.pb-8.md_pb-8
                    div.flex-1
                    p.p-5.flex-shrink.w-3-4.text-xbase
                      | Follow our mission to make the easiest and most fun language for building 
                      br
                      | modern apps that are clean by default
                    div.flex-1
                NewsListElement.mx-auto.md_w-3-4(
                    v-for="edge in $page.allNewsPost.edges" 
                    :key="edge.node.id" 
                    :post="edge.node"
                )
</template>

<page-query>
query {
  allNewsPost(sortBy: "id", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
        content
      }
    }
  }
}
</page-query>

<script>
import NewsListElement from '~/components/NewsListElement.vue'

export default {
  metaInfo () {
    return {
      title: 'News - Pandasite',
      meta: [
        this.social(
          'description',
          'Follow our mission to make the easiest and most fun language for building modern apps that are clean by default'
        )
      ]
    }
  },
  components: {
    NewsListElement
  }
}
</script>
