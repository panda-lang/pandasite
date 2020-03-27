<template lang="pug">
    div.container.mx-auto.mt-12            
        h1.inline-block.text-2xl.mb-6.px-6.pb-2 News
        .flex.flex-col.justify-center.md_flex-row.md_flex-wrap.news-block.w-1-1
            PostBlock(
                v-for="edge in $page.allPost.edges" 
                :key="edge.node.id" 
                :post="edge.node"
            )
</template>

<page-query>
query {
  allPost {
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
import PostBlock from '~/components/PostBlock.vue'

export default {
    metaInfo: {
        title: 'News'
    },
    components: {
        PostBlock
    }
}
</script>

<style lang="stylus">

</style>