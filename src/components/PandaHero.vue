<template lang="pug">
    section.panda-hero
        .lg_container.z-5.relative
            slot
</template>

<script>
export default {
    name: "PandaHero"
}
</script>

<style lang="stylus" scoped>

section.panda-hero
    --breakpoint 85%
    overflow-y auto
    position relative
    background #ffffff

    &::before
        content ''
        display block
        position absolute
        top 0
        right 0
        left 0
        bottom 0
        height var(--breakpoint)
        background black
        clip-path polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px))

    > .container
        relative _
        z-index 1
        margin 177px _ 77px

    pre
        background-color #19191c
</style>
