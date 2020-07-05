<template lang="pug">
    .support
        .support-hero.h-136.md_h-96
            .container.mx-auto.relative.z-5.mx-6.pt-8.justify-center.flex
                .flex.flex-col.mx-4
                    div.flex-initial
                        h1.inline-block.my-4.py-4.px-6.text-black.bg-white How to help? 💕 
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
                    h1.flex-initial.font.thin.p-4.pb-2
                        | Your donation will fund Panda development
                    .flex-1.p-2.heart.p-5
                        .heart-icon.inline-block(v-on:click="paypal()")
                            .absolute.mt-1.heart-text.pt-14.text-white.pl-11
                                | Donate 
                                span.font-bold.text-white $
                                    span(v-html="value")
                            i.fa.fa-heart.fa-10x
                    .flex-initial  
                        VueSlider(
                            v-model="value"
                            :min="min"
                            :max="max"
                            :tooltip-placement="['bottom']"
                            :tooltip-formatter="formatter"
                        )
                        p.text-xxs.italic.mt-8
                            span.font-bold Note: 
                            | Donations are validated manually, so it'll take some time before it appears below.
                            | For other methods of payment, contact with us via payments@panda-lang.org
            div.mt-20.text-center.flex
                .flex-1
                    hr.z-4.absolute.border-gray-400.mt-5.w-full.left-0
                    h1.bg-white.inline-block.relative.px-8.mb-10 Supporters
                    .flex.flex-wrap.justify-center
                        SupportersList.w-1-1.md_w-1-2(
                            :title="'Top of all the time'" 
                            :supporters="supporters.slice(0, 3)"
                            :prefix="'👑'"
                        )
                        SupportersList.w-1-1.md_w-1-2(
                            :title="'Top Early'"
                            :supporters="supporters.filter(supporter => supporter.early).slice(0, 3)"
                            :prefix="'❤️'"
                        )
                        SupportersList.w-full.full-list(
                            :title="'All supporters'" 
                            :supporters="supporters"
                        )
                        

</template>

<script>
import SupportersList from '~/components/SupportersList.vue'
import supporters from '~/assets/supporters.js'

export default {
  metaInfo: {
    title: 'Support'
  },
  data: function () {
    return {
      value: 5,
      min: 1,
      max: 100,
      formatter: '${value}',
      supporters: supporters.sort(
        (supporter, to) => to.amount - supporter.amount
      )
    }
  },
  components: {
    VueSlider: () =>
      import('vue-slider-component/dist-css/vue-slider-component.umd.min.js'),
    SupportersList
  },
  methods: {
    paypal () {
      window.location.href =
        'https://www.paypal.me/pandalang/' + this.value + 'USD'
    }
  }
}
</script>

<style lang="stylus">
.support-hero
    --breakpoint 90%
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
    //@apply bg-green-400
    background #20bf82
.vue-slider-dot-handle
    background-color black
.vue-slider-dot-tooltip-inner
    background black
.vue-slider-dot-handle::after
    //@apply bg-red-300
    @apply bg-gray-400
.heart-icon
    cursor pointer
.heart i
    @apply text-red-500
    transition color 0.5s
.heart-icon:hover i
    @apply text-red-600
    transition color 1.5s

.full-list
    section
        display flex
        flex-wrap wrap
        justify-content center
    .supporter-block
        width 90%
    @media (min-width: 756px)
        .supporter-block
            width 50%
    @media (min-width: 1224px)
        .supporter-block
            width 33.33%
</style>
