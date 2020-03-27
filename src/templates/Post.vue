<template lang="pug">
    .container.mx-auto
        div.post-content.my-10
            h1
              span(v-html="$page.post.title")
              span &nbsp
              span.font-thin(v-html="$page.post.date")
            p(v-html="$page.post.content")
</template>

<page-query>
query Post ($path: String!) {
   post (path: $path) {
    id
    title
    description
    content
    date (format: "D MMMM YYYY")
  }
}
</page-query>
