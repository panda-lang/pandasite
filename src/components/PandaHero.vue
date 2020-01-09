<template lang="pug">
section.panda-hero.h-screen
  .lg_container.z-10
    slot
</template>

<script>
  export default {
    name: "PandaHero"
  }
</script>

<style scoped lang="stylus">

  section.panda-hero
    --breakpoint 70%
    position relative
    background #ffffff

    &::before
      content ''
      display block
      position absolute
      top 0
      right 0
      left 0
      height var(--breakpoint)
      background #000b11
      clip-path polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 97px))

    > .container
      relative _
      z-index 1
      margin 177px _ 77px
</style>
