<template lang="pug">
    .layout.md_pt-header-spacing
        header.panda-header.bg-black.text-white.bg-texture.z-10.w-full.top-0.md_fixed
            nav.container.mx-auto.bg-black
                .float-left
                    router-link.p-4.inline-block(to="/") Pandasite
                .float-right
                    router-link.p-4.inline-block(to="/news") News
                    router-link.p-4.inline-block(to="/guide") Guide
                    router-link.p-4.inline-block(to="/docs") Docs
                    router-link.p-4.inline-block(to="/support") Support
                    a.p-4.inline-block(href='https://discordapp.com/invite/AN8HgWc') Community
                .clearfix
        main
            router-view
        footer.bg-black.text-center.p-2.text-xxs.font-sans.w-full
            p.text-white.uppercase panda-lang.org
</template>

<script>
export default {
  /*
  watch: {
    $route() {
      Vue.nextTick(_ => {
        document.querySelectorAll("pre code.panda").forEach(block => {
          hljs.highlightBlock(block);
        });
      });
    }
  }*/
}
</script>

<style lang="stylus">
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;
}

.layout-padding {
  padding-top: 56px;
}

header, main, footer {
  flex-shrink: 0;
}

main {
  flex: 1;
}

footer {
  height: 32px;
  bottom: 0;
}
</style>