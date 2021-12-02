<template lang="pug">
    div
        panda-hero
            div(class=`
              container mx-auto
              flex
              flex-col-reverse lg_flex-row lg_flex-no-wrap
              justify-center
              mb-10 mt-20 md_mt-32k lg_mb-24 lg_px-6 lg_mt-40
              k
            `)
                .w-full.px-6.my-6.h-full.lg_my-0.lg_w-1-2.lg_mx-0.lg_mr-6
                    pre.text-xs.md_text-base
                        code.panda.
                            require 'panda-lang/awesomeness'

                            type Panda {
                                open hello (String name) {
                                    log 'Hey, ' + name + '.'
                                    log "You're finally awake ฅ^•ﻌ•^ฅ"
                                }
                            }

                            main {
                                let panda = new Panda()
                                panda.hello('you')
                            }
                .w-1-1.mx-6.h-full.lg_w-1-2.lg_mx-0
                    h1.bg-white.inline-block.mb-6.text-4xl.px-6.py-2.mb-4 Panda
                    h2.bg-white.inline-block.font-thin.text-3xl.px-6.py-2 is a clear and stylish programming language for JVM
                    a.inline-block.px-6.py-2.mt-6.text-2xl.bg-theme-blue.text-white.theme-blue-hover(href='/install') Get started →

        .latest-release.container.mx-auto.flex.mb-13
            div.flex-1.mx-5
                hr.border-black
            div.flex-1.text-center.-m-7.z-10.px-4
                p.latest-text.m-0.p-0
                    span.text-gray.text-xl {{ this.$parent.version }}
                    br
                    span.text-bold.text-sm.italic Latest Release ~ {{ now }}
            div.flex-1.mx-5
                hr.border-black

        .features.container.mx-auto
            .features-data.flex.flex-col.justify-center.md_flex-row.md_flex-wrap.content-center
                Feature(
                    v-for="feature in $page.allFeature.edges" 
                    :key="feature.node.id" 
                    :feature="feature.node"
                )
        .news.pb-20.container.mx-auto
            .news-data.flex-col
                h1.inline-block.text-2xl.mb-6.px-5.pb-2 
                  a(href="/news").text-black News
                .flex.flex-col.justify-center.md_flex-row.md_flex-wrap
                    NewsPostPreview.w-1-1.md_w-2-3.lg_w-1-3(
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
const moment = require('moment')

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
  },
  data () {
    return {
      now: moment().format('MMMM D, YYYY')
    }
  }
}
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
.latest-text {
    /* text-shadow: 0 1px 0 rgba(0,0,0,.25) */
    font-family: 'Montserrat';
    min-width: 240px;
}
.feature-title {
    font-family: 'Lato';
}
.feature-block {
    /* font-family: 'Montserrat' */
}
.footer-end {
    --breakpoint: 100%;
    position: relative;
    background-color: white;
    height: 56px;
}
.footer-end::before {
  position: absolute;
  content: '';
  display: block;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background: black;
  clip-path: polygon(0 0, 100% 56px, 100% 100%, 0 100%);
}
 .footer-end .container {
  position: relative;
  margin: 177px 0 77px;
  z-index: 1;
 }
.news-data {
    position: relative;
}
</style>
