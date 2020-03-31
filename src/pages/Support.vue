<template lang="pug">
    .support
        .support-hero.h-128.md_h-96
            .container.mx-auto.relative.z-5.mx-6.pt-6.justify-center.flex
                .flex.flex-col.mx-4
                    div.flex-initial
                        h1.inline-block.my-4.py-4.px-6.text-black.bg-white How to help? 💙
                    div.flex-initial
                        p.inline-block.py-4.px-6.text-xbase.bg-white.text-black.text-2xl.font-thin
                            | The Panda programming language is an open source project.
                            br
                            | There are 
                            span.font-normal 4 
                            | main ways to contribute to the organization.
        .container.mx-auto.relative.mb-20
            div.mx-6.flex.flex-col.md_flex-row
                .support-content.w-1-1.md_w-1-2.pr-6.mb-24.md_mb-0
                    article.relative
                        hr.z-4.absolute.border-gray-300.w-full.mt-9
                        h1.bg-white.pr-6.py-4.relative.inline-block For everyone
                        ul.list-disc.list-inside.mx-4
                            li
                                | Star 
                                a.text-blue-500(href) Panda 
                                | project on GitHub to reach a wider audience
                            li Create some projects on GitHub to increase the popularity and library database
                    article.relative.pt-12
                        hr.z-4.absolute.border-gray-300.w-full.mt-9
                        h1.bg-white.pr-6.py-4.relative.inline-block For involved
                        ul.list-disc.list-inside.mx-4
                            li Join the developers team and develop projects associated with Panda organization
                            li Consider a donation to help us in financial aspect of infrastucture
                .support-navbar.w-1-1.md_w-1-2.border.border-grey.bg-grey.rounded.text-center.p-8.flex.flex-col.justify-center
                    h1.flex-initial.font.thin.p-4.pb-3
                        | Your donation will fund Panda development
                    .flex-1.p-2.heart.p-5
                        .heart-icon.inline-block
                            .absolute.mt-1.heart-text.pt-14.text-white.pl-11
                                | Donate 
                                span.font-bold.text-white $
                                    span(v-html="value")
                            i.fa.fa-heart.fa-10x
                    .flex-initial.pt-2
                        VueSlider(
                            v-model="value"
                            :min="min"
                            :max="max"
                            :tooltip-placement="['bottom']"
                        )
            div.mt-20.text-center.flex
                .flex-1
                    hr.z-4.absolute.border-gray-400.mt-5.w-full.left-0
                    h1.bg-white.inline-block.relative.px-8 Supporters
                        

</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

export default {
    metaInfo: {
        title: 'Support'
    },
    components: {
        VueSlider
    },
    data: function() {
        return {
            value: 5,
            min: 1,
            max: 100
        }
    }
}
</script>

<style lang="stylus">
.support-hero    
    --breakpoint 85%
    position relative
    background-color white
    z-index 1

    &::before
        position absolute
        content ''
        display block
        top 0
        right 0
        left 0
        bottom 0
        height var(--breakpoint)
        background black
        clip-path polygon(0 100%, 100% 82%, 100% 0, 0px 0)
        z-index 2

    > .container
        relative _
        margin 177px _ 77px
        z-index 3
    
li 
    margin 7px 0 7px

.support-way h1
    font-family 'Lato'

.vue-slider-rail
    background-color lightgrey
.vue-slider-process
    //background-color red
    @apply bg-green-300
.vue-slider-dot-handle
    background-color black

.heart-icon
    cursor pointer
.heart i
    @apply text-red-300
    transition color 0.5s
.heart-icon:hover i
    @apply text-red-700
    transition color 3s
</style>