<template lang="pug">
  Layout
    panda-hero
      .flex
        .w-1-2.h-full
          pre
            code.panda meh
        .w-1-2.h-full
          h1.bg-white.p-4 Panda
          h2.bg-white.p-4 lightweight and powerful programming language written in Java
</template>

<script>
  import PandaHero from "../components/PandaHero";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    PandaHero
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
