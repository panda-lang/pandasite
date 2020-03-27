<template lang="pug">
    div.container.mx-auto.mt-12
        div.mx-12         
            h1.inline-block.text-2xl.px-6.py-3.bg-black.text-white News
            TreePostLine.h-10
            TreePostBlock(
                v-for="edge in $page.allNewsPost.edges" 
                :key="edge.node.id" 
                :post="edge.node"
            )
            TreePostLine.h-10
</template>

<page-query>
query {
  allNewsPost {
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
import TreePostLine from '~/components/TreePostLine.vue'
import TreePostBlock from '~/components/TreePostBlock.vue'

export default {
    metaInfo: {
        title: 'News'
    },
    components: {
        TreePostLine,
        TreePostBlock
    }
}
</script>