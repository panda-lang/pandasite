<template lang="pug">
    Layout
</template>

<page-query>
query Tag ($path: String!) {
   post: tag (path: $path) {
    id
  }
}
</page-query>