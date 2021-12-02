<template lang="pug">
    .supporters-list.p-4
        h1.pb-8.font-thin.underline {{ title }}
        section
            Supporter(v-for="supporter in supporters" :key="supporter.user" :supporter="supporter" :prefix="prefix")
</template>

<script>
import Supporter from '~/components/Supporter.vue'

export default {
  name: 'SupportersList',
  props: ['title', 'supporters', 'prefix'],
  components: {
    Supporter
  }
}
</script>

<style>
.supporters-list h1 {
  font-family: 'Segoe UI';
}
</style>
