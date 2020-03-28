<template lang="pug">
    .layout.md_pt-header-spacing
        header.panda-header.bg-black.text-white.bg-texture.z-10.w-full.top-0.md_fixed
            nav.container.mx-auto.bg-black
                .float-left.flex.flex-row
                    //g-link(to="/").logo
                      //  img(src="/logo.png")
                    g-link.font-bold.ml-4.mt-4(to="/") Pandasite
                .float-right
                    g-link.p-4.inline-block(to="/news") News
                    g-link.p-4.inline-block(to="/guide") Guide
                    g-link.p-4.inline-block(to="/docs") Docs
                    g-link.p-4.inline-block(to="/support") Support
                    a.p-4.inline-block(href='https://discordapp.com/invite/AN8HgWc') Community
                .clearfix
        main
            slot
        footer.bg-black.text-center.p-2.py-4.text-xxs.font-sans.w-full
            .container.mx-auto.flex.text-white
                div.flex-1
                   p.text-white Copyright 2020 Panda Programming Language
                div.flex-1.text-center.text-sm
                    a(href="https://github.com/panda-lang")
                       i.fab.fa-github
                    a(href="")
                      i.fab.fa-discord
                div.flex-1
</template>

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
.logo
  height 37px
  width 37px
  border-radius 100%
  background-color #fff
  padding 2px
  margin-top 10px
.logo img
  border-radius 100%
  background-color black

main
  flex: 1

footer
  //height: 32px
  bottom 0
footer .container
  padding  7
footer .container a
    margin 0 7px
</style>
