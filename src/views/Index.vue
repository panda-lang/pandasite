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
                    button.bg-white.inline-block.px-6.py-2.mt-6.text-2xl.bg-theme-download.text-white Get started →

        .latest-release.container.mx-auto.flex.mb-16
            div.flex-1.mx-5
                hr.border-black
            div.flex-1.text-center.-m-7.z-10.px-4
                p.latest-text.m-0.p-0
                    span.text-gray.text-xl 1.0.0-alpha.1
                    br
                    span.text-bold.text-sm.italic Latest Release ~ April 01, 2020
            div.flex-1.mx-5
                hr.border-black

        .features.container.mb-4.mx-auto.pb-4
            .features-data.flex.flex-col.justify-center.md_flex-row.md_flex-wrap.content-center
                for val in [1, 2, 3]
                    .feature-block.md_w-1-4.border-gray-300.mx-4.my-4.text-center.justify-center
                        .content.mx-20.md_mx-0
                            h3.feature-title.text-xl.p-0.md_p-3 Random Feature
                            p.text-base.p-4.mb-2.md_mb-6 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            button.bg-theme-download.px-6.py-1.text-white.mb-6 Read more
        .news.pb-12.container.mx-auto
            .news-data.flex-col
                h1.inline-block.text-2xl.mb-6.px-6.pb-2 News
                .flex.flex-col.justify-center.md_flex-row.md_flex-wrap
                    for val in [1, 2, 3]
                        article.w-1-1.md_w-2-3.lg_w-4-11.border.border-grey-300.relative
                            h5.text-lg= 'Extra News ' + val
                                span.news-time.text-xs.absolute.font-thin= (val+1) + ' hours ago'
                            p.py-4= 'News ' + val + ' about the standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those'
                            a.my-4.text-xs.text-theme-download Read More →

        .footer-end


</template>

<script>
import PandaHero from "../components/PandaHero";

export default {
    metaInfo: {
        title: 'Pandasite'
    },
    components: {
        PandaHero
    }
}
</script>

<style lang="stylus">
.home-links a
    margin-right 1rem

.latest-text
    //text-shadow: 0 1px 0 rgba(0,0,0,.25)
    font-family: 'Montserrat'

.feature-title
    font-family: 'Lato'
.feature-block
    //font-family: 'Montserrat'

.footer-end
    --breakpoint 100%
    position relative
    background-color wgite
    z-index 1
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
        z-index 2
    > .container
        relative _
        margin 177px _ 77px
        z-index 3

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
