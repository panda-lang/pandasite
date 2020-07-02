<template lang="pug">
    g-link(:to="post.path")
        article.news-article.border.border-grey-300.relative
            h5.text-slg(v-html="post.title")
            span.news-time.text-xs.absolute.font-thin(v-html="post.date")
            p.py-4(v-html="description(post, 99)")
            g-link.text-xs.text-theme-blue(:to="post.path") Read More →
</template>

<script>
export default {
    name: 'NewsPostPreview',
    props: ['post']
}
</script>

<style lang="stylus">
.news-article
    background-color white
    padding 17px
    margin 17px
    margin-top 8px
    margin-bottom 8px
    line-height 1.4
.news-article h5
    font-weight 600
    font-family 'Noto Sans'
    letter-spacing -0.7px
    
.news-article p
    color #8a8a8a
.news-time 
    right 14px
    top 23px
    color gray
</style>