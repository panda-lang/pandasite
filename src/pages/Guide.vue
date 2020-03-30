<template lang="pug">
    .container
        .docs.flex.flex-col.md_flex-row
            .panel.bg-grey.py-4.px-12.pb-10
                input.px-2.py-1.my-4(type="text" placeholder="Search")
                div.ml-2(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                    a(:href="'#' + edge.node.id")
                        p.mt-4.text-sm.font-bold.uppercase(v-if="(edge.node.id % 10.0) == 0") {{ edge.node.title }}
                        p.ml-4.mt-2.text-sm(v-else) {{ edge.node.title }}    
            .container.justify-center                    
                .content.p-12.mt-10
                    div(v-for="edge in $page.allGuidePost.edges" :key="edge.node.id")
                        div.mb-20(v-html="edge.node.content" :id="edge.node.id")
</template>


<page-query>
query {
  allGuidePost(sortBy: "id", order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        path
        content
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Guide'
    }
}
</script>
