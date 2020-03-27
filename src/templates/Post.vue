<template lang="pug">
    .container
        div.post-content
            p Title
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
