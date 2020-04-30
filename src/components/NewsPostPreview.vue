<template lang="pug">  
    .news-article.relative.flex.h-auto.flex-row.py-3.mb-10.border.border-pre-theme
        .desc.text-center.w-24.h-full.flex.align-center.mt-4.flex-col
            h5.font-bold.text-lg.mx-auto.mb-4(v-html="'#' + post.id")
            p.mb-4.mx-auto.my-auto.break-words.px-8(v-html="post.date")
        .pt-4
            h5.mr-4.text-lg(v-html="post.title")
            .pb-3
                p.p-4.pl-0(v-html="desc(post)")
                g-link.mr-4.my-4.text-xs.text-theme-download(:to="post.path") Read More →
</template>

<script>
export default {
    name: "NewsPostPreview",
    props: ["post"],
    methods: {
        desc(post) {
            if (post.description != '') {
                return post.description
            }

            let content = post.content
                .replace(/<([^p>]+?)([^h1>]*?)>(.*?)<\/\1>/ig, '')
                .replace(/(<([^>]+)>)/gi, '')

            if (content.length < 200) {
                return content
            }

            return content.substring(0, 200) + '...'
        }
    }
}
</script>

<style lang="stylus">
.desc h5
    padding-top 1px
</style>
