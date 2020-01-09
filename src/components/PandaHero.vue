<template lang="pug">
section.panda-hero
  .lg_container
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
    relative _
    background #ffffff

    &::before
      content ''
      display block
      absolute 0 0 _
      height var(--breakpoint)
      background #000b11
      clip-path polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 97px))

    > .container
      relative _
      z-index 1
      margin 177px _ 77px
</style>
