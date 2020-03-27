<template lang="pug">
    .flex.flex-col.md_flex-row.md_flex-wrap.news-block.w-1-1.relative
        TreePostLine
        div
            PostBlock(:key="post.id" :post="post")
            div.h-2.w-full
        svg(width=40 height=40).absolute.ml-8.mt-16
            circle(cx=22 cy=20 r=7 fill='black')            
</template>

<script>
import TreePostLine from '~/components/TreePostLine.vue'
import PostBlock from '~/components/PostBlock.vue'

export default {
    name: "TreePostBlock",
    props: ["post"],
    components: {
        TreePostLine,
        PostBlock
    }
}
</script>

