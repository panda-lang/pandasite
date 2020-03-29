<template lang="pug">  
    .news-article.relative.flex.h-auto.flex-row.py-3.mb-10.border.border-pre-theme
        div.text-center.w-24.h-full.flex.align-center.mt-5
            p.mx-auto.my-auto.break-words.px-8(v-html="post.date")
        div
            h5.pt-4.mr-4.text-lg(v-html="post.title")
            div.pb-3
                p.p-4.pl-0(v-html="post.description")
                g-link.mr-4.my-4.text-xs.text-theme-download(:to="post.path") Read More →
</template>

<script>
export default {
    name: "NewsPostPreview",
    props: ["post"]
}
</script>

<style lang="stylus">

</style>
