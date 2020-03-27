<template lang="pug">  
    article.news-article.relative.flex.flex-row.pt-9
        p.px-6.py-4(v-html="post.date")
        div
            h5.pt-4.text-lg(v-html="post.title")
            div
                p.py-2(v-html="post.description")
                g-link.my-4.text-xs.text-theme-download(:to="post.path") Read More →
</template>

<script>
export default {
    name: "NewsPostPreview",
    props: ["post"]
}
</script>

