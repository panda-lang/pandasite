<template lang="pug">
    .feature-block.md_w-1-4.border-gray-300.mx-8.my-5.text-center.justify-center
        .content.mx-20.md_mx-0
            h3.feature-title.text-xl.p-0.md_p-3(v-html="feature.title")
            p.text-base.p-4.mb-2.md_mb-6(v-html="feature.content")
            // a.bg-theme-download.px-6.py-1.text-white.mb-6(:href="feature.link") Read more
</template>

<script>
export default {
    name: 'Feature',
    props: ['feature']
}
</script>