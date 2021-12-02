<template lang="pug">
    section.panda-hero
        .lg_container.z-5.relative.md_mx-auto
            slot
</template>

<script>
export default {
  name: 'PandaHero',
  updated () {
    if (process.isClient) {
      this.$nextTick(() => {
        document
          .querySelectorAll('pre code.panda')
          .forEach(block => this.$hljs.highlightBlock(block))
      })
    }
  }
}
</script>

<style>
section.panda-hero {
  --breakpoint: 85%;
  overflow-y: auto;
  position: relative;
  background: #ffffff;
}
section.panda-hero::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 85%;
  background: black;
  clip-path: polygon(0 0, 100% 0, 100% 91%, 0 calc(100% - 130px));
}
section.panda-hero .container {
  position: relative;
  z-index: 1;
  margin: 177px 0 77px;
}
section.panda-hero pre {
  background-color: #19191c;
}
</style>
