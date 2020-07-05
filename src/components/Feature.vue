<template lang="pug">
    .feature-block.md_w-1-3.lg_w-1-4.mx-4.md_mx-0.lg_mx-9.xl_mx-13.mt-1.text-center.justify-center
        .content.mx-2.px-2.py-4.md_mx-0
            h3.feature-title.text-xl.p-0.md_p-3(v-html="feature.title")
            p.text-base.p-4.pt-0.mb-2.md_mb-6(v-html="feature.content")
            //a.bg-theme-blue.px-6.py-1.text-white.mb-6(:href="feature.link") Read more
</template>

<script>
export default {
  name: 'Feature',
  props: ['feature']
}
</script>
