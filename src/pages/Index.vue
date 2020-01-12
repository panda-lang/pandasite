<template lang="pug">
  Layout
    panda-hero
      .flex.container.mx-auto.my-48
        .w-1-2.h-full.mr-6
          pre
            code.panda.
              module awesomeness

              class Panda {
                method hello(String name) {
                  Console.print("Hey, " + name + ".")
                  Console.print("You're finally awake ฅ^•ﻌ•^ฅ")
                }
              }

              main {
                Panda panda = new Panda()
                panda.hello("you")
              }
        .w-1-2.h-full
          h1.bg-white.inline-block.mb-6.text-4xl.px-6.py-2.mb-4 Panda
          h2.bg-white.inline-block.font-thin.text-3xl.px-6.py-2 is a lightweight and powerful programming language written in Java.
</template>

<script>
  import PandaHero from "../components/PandaHero";

export default {
  metaInfo: {
    title: 'Pandasite'
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
