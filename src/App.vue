<template lang="pug">
  Default
    router-view
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Default from '~/Default.vue'

const description = `
Panda is a clear and stylish programming language for JVM.
Create clean apps, enhance the syntax dynamically or build your own language on top of the Panda Framework.
`

export default {
  components: {
    Default
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        /* Default */
        this.social('description', description),
        /* Open Graph */
        this.social('og:url', 'https://panda-lang.org' + this.$route.fullPath),
        this.social('og:site_name', 'panda-lang'),
        this.social('og:type', 'article'),
        this.social('og:title', 'The Panda Programming Language'),
        this.social('og:description', description),
        this.social('og:image', 'https://panda-lang.org/images/open-graph-1.png'),
        this.social('og:width', 1200),
        this.social('og:height', 630),
        /* Twitter */
        this.social('twitter:title', 'The Panda Programming Language'),
        this.social('twitter:description', description),
        this.social('twitter:card', 'summary_large_image'),
        this.social('twitter:image', 'https://panda-lang.org/images/open-graph-1.png'),
        this.social('twitter:site', '@panda_language'),
        this.social('twitter:creator', '@dzikoysk'),
      ]
    }
  }
}
</script>
