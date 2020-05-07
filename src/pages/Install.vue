<template lang="pug">
    .install
        .install-header
            .container.h-144.md_h-112.lg_h-88.flex.relative.flex-col.justify-center.items-center.mx-auto
                .flex-initial.flex.flex-col.mx-4.mt-6
                    .flex-initial
                        h1.inline-block.my-4.py-4.px-6.text-black.bg-white How to install? 🧪
                    .flex-initial
                        p.flex-1.inline-block.bg-white.text-black.py-2.px-6.text-2xl.font-thin
                            | Download 
                            span.font-normal Panda 
                            | installer for your platform, and start developing today  
                .flex-initial.pt-11.text-center
                    a.inline-block.mx-4.px-16.py-3.mt-6.text-2xl.bg-theme-download.text-white(href='/install')
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-microsoft
                            | &nbsp; Windows
                        p.italic.text-xsbase panda-1.0.0-alpha.exe
                    a.inline-block.mx-1.px-16.py-3.mt-6.text-2xl.bg-theme-download.text-white(href='/install')
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-linux
                            | &nbsp; Linux
                        p.italic.text-xsbase panda-1.0.0-alpha.rpm/deb
                    a.inline-block.mx-4.px-16.py-3.mt-6.text-2xl.bg-theme-download.text-white(href='/install')
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-apple
                            | &nbsp; macOS
                        p.italic.text-xsbase panda-1.0.0-alpha.app
        .container.mx-auto.pt-14
            .mx-12
                h1 Getting started
                p.py-4
                    | • At this moment we offer two ways to install Panda. 
                    | The first one is dedicated for users and developers who use and create applications in Panda. 
                    | The second on is for developers who want to use 
                    span.italic.text-red-600 Panda Framework 
                    | as a scripting language in theirs applications.
                h1.mt-5 Users
                p.py-4 
                    | • Download installer dedicated for your platform and just launch it.
                    | You don't have to worry about 
                    span.italic.text-red-600 JVM 
                    | and any other requirements.
                    | After installation, you should be able to launch applications written in Panda.
                    br
                    | • In case of any problems visit 
                    a(href="https://github.com/panda-lang/panda/issues") Panda :: issue tracker 
                    | to ask your question.
                h1.mt-5 Developers
                p.py-4 
                    | • To create your first application in Panda, 
                    | download installer as it was explained in 
                    span.italic.text-red-600 User 
                    | section and start with the 
                    a(href="/guide#project") Guide :: Project 
                    | chapter.
                    br
                    | • If you want to use Panda as a library in your project,
                    | we also offer 
                    span.italic.text-red-600 Maven 
                    | artifacts - visit 
                    a(href="/guide#installation") Guide :: installation 
                    | to get more details.
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.install-header
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
        clip-path polygon(0 0, 100% 0, 100% 100%, 0 100%)

    > .container
        relative _
        z-index 1
        margin 177px _ 77px
</style>