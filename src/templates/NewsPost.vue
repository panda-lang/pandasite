<template lang="pug">
    .container.mx-auto
        div.post-content.my-10
            h1
              span(v-html="$page.newsPost.title")
              span &nbsp
              span.font-thin(v-html="$page.newsPost.date")
            p(v-html="$page.newsPost.content")
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
