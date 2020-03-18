<template lang="pug">
    .layout
        header.panda-header.bg-black.text-white.bg-texture.fixed.z-10.w-full.top-0
            nav.container.mx-auto.bg-black
                .float-left
                    g-link.p-4.inline-block(to="/") {{ $static.metadata.siteName }}
                .float-right
                    g-link.p-4.inline-block(to="/news") News
                    g-link.p-4.inline-block(to="/guide") Guide
                    g-link.p-4.inline-block(to="/docs") Docs
                    g-link.p-4.inline-block(to="/support") Support
                    a.p-4.inline-block(href='https://discordapp.com/invite/AN8HgWc') Community
                .clearfix
        main
            slot
        footer.bg-pre-theme.mt-12.text-center.p-2.text-xxs.font-sans.w-full
            p.text-white.uppercase panda-lang.org
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<style lang="stylus">
.layout
    display flex
    min-height 100vh
    flex-direction column
    padding-top 56px
    align-items stretch

header, main, footer
    flex-shrink 0

main
    flex 1

footer
    height 32px
    bottom 0
</style>
