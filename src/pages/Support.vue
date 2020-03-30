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
                .support-content.w-1-2.pr-6
                    article.relative
                        hr.z-4.absolute.border-gray-400.w-full.mt-9.border-dashed
                        h1.bg-white.pr-6.py-4.relative.inline-block For everyone
                        ul.list-disc.list-inside.mx-4
                            li
                                | Star 
                                a.text-blue-500(href) Panda 
                                | project on GitHub to reach a wider audience
                            li Create some projects on GitHub to increase the popularity and library
                    article.relative.pt-12
                        hr.z-4.absolute.border-gray-400.w-full.mt-9.border-dashed
                        h1.bg-white.pr-6.py-4.relative.inline-block For involved
                        ul.list-disc.list-inside.mx-4
                            li Join the developers team and develop projects associated with Panda organization
                            li Consider a donation to help us in financial aspect of infrastucture
                .support-navbar.border-black.bg-grey.w-1-2      
                        

</template>

<script>
export default {
    metaInfo: {
        title: 'Support'
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

.support-navbar
    border-left: 1px solid
</style>