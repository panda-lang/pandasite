<template lang="pug">
    Layout
        panda-hero
            .flex.flex-wrap-reverse.justify-center.container.my-10.mx-auto.lg_flex-no-wrap.lg_my-48.lg_px-6
                .w-full.mx-10.my-10.h-full.my-6.lg_my-0.lg_w-1-2.lg_mx-0.lg_mr-6
                    pre
                        code.panda.
                            module awesomeness

                            shared class Panda {
                                internal hello(String name) {
                                    log 'Hey, ' + name + '.'
                                    log "You're finally awake ฅ^•ﻌ•^ฅ"
                                }
                            }

                            main {
                                Panda panda = new Panda()
                                panda.hello('you')
                            }
                .w-1-1.mx-10.h-full.lg_w-1-2.lg_mx-0
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
