<template lang="pug">
    
</template>

<page-query>
query GuidePost ($id: ID!) {
   post: guidePost (id: $id) {
    id
    title
  }
}
</page-query>
