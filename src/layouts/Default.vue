<template lang="pug">
    .layout
        header.panda-header.bg-black.text-white.bg-texture.z-10.w-full.top-0.md_fixed
            nav.container.mx-auto.bg-black.flex.w-full.justify-center.md_justify-between.flex-col.md_flex-row
                .flex-1.justify-center.md_justify-start.flex.w-full.px-4.mt-2.md_mt-0
                    g-link(to="/").logo
                      img(width="27px", src="/logo.png")
                    g-link.font-bold.ml-4.mt-4(to="/") Pandasite
                .flex-initial.flex.justify-center.md_justify-end.px-4
                    div.w-full.text-center.md_text-right
                        g-link.px-4.pt-6.md_pt-4.inline-block(to="/install") Install
                        g-link.px-4.pt-4.inline-block(to="/news") News
                        g-link.px-4.pt-4.inline-block(to="/guide") Guide
                        // g-link.p-4.inline-block(to="/docs") Docs
                        g-link.px-4.pt-4inline-block(to="/support") Support
                        a.px-4.pt-4.inline-block(href='xxxhttps://discordapp.com/invite/AN8HgWc') Community
        main
            slot
        footer.bg-black.text-center.p-2.py-4.text-xxs.font-sans.w-full.z-1(v-bind:class="{ fixed: isFixedFooterActive }")
            .container.mx-auto.flex.text-white
                div.flex-1.text-center.text-sm
                    a(href="https://github.com/panda-lang")
                       i.fab.fa-github
                    a(href="")
                      i.fab.fa-discord
                div.flex-1
                   p.text-white Copyright © 2020 The Panda Programming Language

</template>

<script>
export default {
  data() {
    return {
      isFixedFooterActive: false
    }
  },
  watch:{
    $route (to, from){
        this.isFixedFooterActive = to.path.includes('guide')
    }
} 
}
</script>

<style lang="stylus">
.layout
  display flex
  min-height 100vh
  flex-direction column
  align-items stretch
.layout-padding
  padding-top 56px

header, main, footer 
  flex-shrink 0

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

main
  flex: 1

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
