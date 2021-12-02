<template lang="pug">  
    g-link.relative.flex.h-auto.flex-row.py-3.mb-10.border-1.border-pre-theme.text-black(:to="post.path")
        .desc.text-center.w-26.h-full.flex.align-center.mt-4.flex-col
            h5.font-bold.text-lg.mx-auto.mb-4(v-html="'#' + post.id")
            p.mb-4.mx-auto.my-auto.break-words.px-8(v-html="post.date")
        .pt-4
            h5.mr-4.text-lg(v-html="post.title")
            .pb-3
                p.p-4.pl-0(v-html="description(post, 230)")
                g-link.mr-4.my-4.text-xs.text-theme-blue(:to="post.path") Read More →
</template>

<script>
export default {
  name: 'NewsListElement',
  props: ['post']
}
</script>
