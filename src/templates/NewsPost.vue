<template lang="pug">
  .container.mx-auto
    .post-content.my-14.mx-12
      .menu.flex.justify-between
        p
          span.font-thin(v-html="$page.post.date")
          span &nbsp - &nbsp
          span(v-html="$page.post.title")
        p 
          a(href='/news') ← Back to the news
      p.markdown.pt-3.mb-24(v-html="$page.post.content")
</template>

<page-query>
query NewsPost ($id: ID!) {
   post: newsPost (id: $id) {
    id
    title
    description
    content
    date (format: "D MMMM YYYY")
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        /* Default */
        this.social('description', this.description(this.$page.post, 99)),
        /* Open Graph */
        this.social('og:title', this.$page.post.title),
        this.social('og:description', this.description(this.$page.post, 99)),
        /* Twitter */
        this.social('twitter:title', this.$page.post.title),
        this.social('twitter:description', this.description(this.$page.post, 99))
      ]
    }
  }
}
</script>
