<template lang="pug">
    div
        .container.mx-auto.mt-12            
            h1.inline-block.text-2xl.mb-6.px-6.pb-2 News
                .flex.flex-col.justify-center.md_flex-row.md_flex-wrap.posts
                    PostBlock(v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node")
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
.news-list article
    background-color #f1f1f1
    margin-top: 27px
    padding 17px

.news-list h3
    padding 7px

.news-list p
    color grey
    padding 7px
</style>