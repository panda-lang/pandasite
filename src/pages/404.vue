<template lang="pug">
    .p404
        .container.mx-auto
            .flex.justify-center.pt-16
                h1.bg-black.text-white.px-12.py-3 404 - Page Not Found
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Not Found',
      meta: ['description', 'This page does not exist']
    }
  }
}
</script>

<style lang="stylus"></style>
