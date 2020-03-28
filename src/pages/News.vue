<template lang="pug">
    div.container.mx-auto.mt-12
        div.mx-12         
            h1.inline-block.text-2xl.px-6.py-2.bg-black.text-white News
            NewsPostPreview(
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