<template lang="pug">
    .news-list
        div.container.mx-auto.pt-12.bg-white
            div.mx-12
                div.text-center   
                  h1.text-3xl.align-center Panda Blog
                  div.flex.pb-6
                    div.flex-1
                    p.p-5.flex-shrink.w-3-4.text-xbase
                      | Follow our mission to make the easiest and most fun language for building 
                      br
                      | modern apps that are clean by default
                    div.flex-1
                NewsPostPreview.mx-auto.md_w-3-4(
                    v-for="edge in $page.allNewsPost.edges" 
                    :key="edge.node.id" 
                    :post="edge.node"
                )
</template>

<page-query>
query {
  allNewsPost(sortBy: "date", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import NewsPostPreview from '~/components/NewsPostPreview.vue'

export default {
    metaInfo: {
        title: 'News'
    },
    components: {
        NewsPostPreview
    }
}
</script>
