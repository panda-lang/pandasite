<template lang="pug">
    div
        panda-hero
            .flex.flex-wrap-reverse.justify-center.container.mb-10.mt-20.md_mt-32.k.mx-auto.lg_flex-no-wrap.lg_mb-24.lg_px-6.lg_mt-40
                .w-full.mx-6.my-6.h-full.lg_my-0.lg_w-1-2.lg_mx-0.lg_mr-6
                    pre.text-xs.md_text-base
                        code.panda.
                            module awesomeness

                            shared class Panda {
                                internal hello(String name) {
                                    log 'Hey, ' + name + '.'
                                    log "You're finally awake ฅ^•ﻌ•^ฅ"
                                }
                            }

                            main {
                                Panda panda = new Panda()
                                panda.hello('you')
                            }
                .w-1-1.mx-6.h-full.lg_w-1-2.lg_mx-0
                    h1.bg-white.inline-block.mb-6.text-4xl.px-6.py-2.mb-4 Panda
                    h2.bg-white.inline-block.font-thin.text-3xl.px-6.py-2 is a clear and stylish programming language for JVM
                    a.inline-block.px-6.py-2.mt-6.text-2xl.bg-theme-download.text-white(href='/install') Get started →

        .latest-release.container.mx-auto.flex.mb-14
            div.flex-1.mx-5
                hr.border-black
            div.flex-1.text-center.-m-7.z-10.px-4
                p.latest-text.m-0.p-0
                    span.text-gray.text-xl 1.0.0-alpha.1
                    br
                    span.text-bold.text-sm.italic Latest Release ~ May 10, 2020
            div.flex-1.mx-5
                hr.border-black

        .features.container.mb-5.mx-auto.pb-4
            .features-data.flex.flex-col.justify-center.md_flex-row.md_flex-wrap.content-center
                Feature(
                    v-for="feature in $page.allFeature.edges" 
                    :key="feature.node.id" 
                    :feature="feature.node"
                )
        .news.pb-20.container.mx-auto
            .news-data.flex-col
                h1.inline-block.text-2xl.mb-6.px-6.pb-2 News
                .flex.flex-col.justify-center.md_flex-row.md_flex-wrap
                    NewsPostPreview.w-1-1.md_w-2-3.lg_w-4-11(
                        v-for="newsPost in $page.allNewsPost.edges" 
                        :key="newsPost.node.id" 
                        :post="newsPost.node"
                    )
        .footer-end


</template>

<page-query>
query {
  allFeature(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        link
        content
      }
    }
  }
  allNewsPost(sortBy: "id", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
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
import PandaHero from '../components/PandaHero'
import Feature from '../components/Feature'
import NewsPostPreview from '../components/NewsPostPreview'

export default {
    metaInfo: {
        title: 'Pandasite'
    },
    components: {
        PandaHero,
        Feature,
        NewsPostPreview
    }
}
</script>

<style lang="stylus">
.home-links a
    margin-right 1rem

.latest-text
    //text-shadow: 0 1px 0 rgba(0,0,0,.25)
    font-family 'Montserrat'

.feature-title
    font-family 'Lato'
.feature-block
    //font-family: 'Montserrat'

.footer-end
    --breakpoint 100%
    position relative
    background-color white
    height 56px

    &::before
        position absolute
        content ''
        display block
        top 0
        right 0
        left 0
        bottom 0
        height var(--breakpoint)
        background black
        clip-path polygon(0 0, 100% 56px, 100% 100%, 0 100%)
    > .container
        relative _
        margin 177px _ 77px
        z-index 1

.news-data
    position relative
</style>
