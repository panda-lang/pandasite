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
