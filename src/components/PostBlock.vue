<template lang="pug">
    .news-block
        article.w-1-1.md_w-2-3.lg_w-4-11.border.border-grey-300.relative
        h5.text-lg(v-html="post.title")
            span.news-time.text-xs.absolute.font-thin(v-html="post.date")
        p.py-4(v-html="post.description")
        g-link.my-4.text-xs.text-theme-download(:to="post.path") Read More →
</template>

<script>
export default {
    name: "PostBlock",
    props: ["post"],
   
}
</script>

<style lang="stylus">
.news-data
    position relative
.news article
    background-color white
    padding 17px
    margin 17px
    margin-top 8px
    margin-bottom 8px
.news article h5
    font-weight: bold
.news article p
    color grey
.news article a
    // color blue
.news-time 
    right 14px
    top 21px
    color gray
</style>