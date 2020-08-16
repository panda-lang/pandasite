<template lang="pug">
    .install
        .install-header
            .container.h-160.md_h-146.lg_h-96.flex.relative.flex-col.justify-center.items-center.mx-auto
                .flex-initial.flex.flex-col.mx-4.mt-6
                    .flex-initial
                        h1.inline-block.my-4.py-4.px-6.text-black.bg-white How to install? 💎
                    .flex-initial
                        p.flex-1.inline-block.bg-white.text-black.py-2.px-6.text-2xl.font-thin
                            | Download 
                            span.font-normal Panda 
                            | installer for your platform, and start developing today  
                .flex-initial.pt-2.md_pt-5.text-center.lg_pt-2.w-full.mx-auto.mb-16
                    a(href='https://github.com/panda-lang/installer').w-3-4.lg_w-1-4.inline-block.mx-4.py-3.mt-6.text-2xl.bg-theme-blue.theme-blue-hover.text-white
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-microsoft
                            | &nbsp; Windows
                        p.italic.text-xsbase Panda {{ this.$parent.version }} - Installer
                    a(href='https://github.com/panda-lang/panda/releases').w-3-4.lg_w-1-4.inline-block.mx-1.py-3.mt-6.text-2xl.bg-theme-blue.theme-blue-hover.text-white
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-linux
                            | &nbsp; Linux
                        p.italic.text-xsbase Panda {{ this.$parent.version }} - Archive
                    a(href='https://github.com/panda-lang/panda/releases').w-3-4.lg_w-1-4.inline-block.mx-4.py-3.mt-6.text-2xl.bg-theme-blue.theme-blue-hover.text-white
                        h1.text-white.mx-4  
                            i.text-xl.fab.fa-apple
                            | &nbsp; macOS
                        p.italic.text-xsbase Panda {{ this.$parent.version }} - Archive
        .container.mx-auto.pt-14.mb-20
            .mx-12
                h1 Getting started
                p.py-4
                    | • At this moment we offer two ways to install Panda. 
                    | The first one is dedicated for users and developers who use and create applications in Panda. 
                    | The second on is for developers who want to use 
                    span.italic.text-red-600 Panda Framework 
                    | as a scripting language in their applications.
                h1.mt-5 Users
                p.py-4 
                    | • Download installer dedicated for your platform and just launch it.
                    | You don't have to worry about 
                    span.italic.text-red-600 JVM 
                    | and any other requirements.
                    | After installation, you should be able to launch applications written in Panda.
                    br
                    | • In case of any problems visit 
                    a(href="https://github.com/panda-lang/panda/issues") Panda :: Issue tracker 
                    | to ask your question, or 
                    a(href="https://github.com/panda-lang/installer/issues") Installer :: Issue tracker 
                    | in case of any problems during the installation process.
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
  metaInfo () {
    return {
      title: 'Installation - Pandasite',
      meta: [
        this.social(
          'description',
          'Download Panda installer for your platform, and start developing today'
        )
      ]
    }
  }
}
</script>

<style lang="stylus">
.install-header
    --breakpoint 100
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
