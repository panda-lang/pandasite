<template lang="pug">
    .layout
        header.panda-header.bg-black.text-white.bg-texture.z-20.w-full.top-0.md_h-header-spacing.md_fixed.h-auto
            nav.container.mx-auto.bg-black.flex.w-full.justify-center.md_justify-between.flex-col.md_flex-row.my-auto
                .flex-1.justify-center.md_justify-start.flex.w-full.px-4.mt-2.md_mt-0.select-none
                    g-link(to="/").logo
                      img(width="27px", src="/images/logo.png")
                    g-link.font-bold.ml-4.mt-4(to="/") Pandasite
                .flex-initial.flex.justify-center.md_justify-end.px-4.pt-2.md_pt-0
                    div.w-full.text-center.md_text-right.select-none
                        - 
                          var routes = {
                            Install: '/install',
                            News: '/news',
                            Guide: '/guide',
                            Support: '/support'
                          }
                        each route, name in routes
                            g-link.select-none.px-4.pt-4.md_pt-4.inline-block(to= route)= name
                        a.px-4.py-4.inline-block(href='https://github.com/panda-lang') Contribute
        main.md_pt-header-spacing
            slot
        footer.bg-black.text-center.p-2.py-4.text-xxs.font-sans.w-full.z-1(v-bind:class="{ fixed: isFixedFooterActive }")
            .container.mx-auto.flex.text-white
                div.flex-1.text-center.text-sm
                    a(href="https://twitter.com/dzikoysk")
                      i.fab.fa-twitter
                    a(href="https://github.com/panda-lang")
                       i.fab.fa-github
                    //a(href="")
                    // i.fab.fa-discord
                div.flex-1
                   p.text-white Copyright © 2020 The Panda Programming Language

</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      version: '',
      isFixedFooterActive: false
    }
  },
  watch: {
    $route (to, from) {
      this.isFixedFooterActive = to.path.includes('guide')
    }
  },
  mounted () {
    this.version = axios
      .get('https://repo.panda-lang.org/releases/org/panda-lang/panda/latest')
      .then(response => (this.version = response.data))
      .catch(error => {
        console.log(error)
        this.version = 'Cannot fetch the latest version'
      })
  }
}
</script>

<style lang="stylus">
.layout
  display flex
  min-height 100vh
  flex-direction column
  align-items stretch

header, main, footer
  flex-shrink 0
header
  height 56px
main
  flex 1

header, footer
  a
    color white

.logo
  height 27px
  width 27px
  border-radius 100%
  background-color #fff
  padding 2px
  margin-top 16px
.logo img
  border-radius 100%
  background-color black

footer
  //height: 32px
  bottom 0
  position relative
footer .container
  padding  7
footer .container a
    margin 0 7px
.fixed
  position fixed
</style>
