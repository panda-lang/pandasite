<template lang="pug">
  .layout
    header.panda-header.bg-gray-900.text-white.bg-texture
      nav.container.mx-auto
        .float-left
          g-link.p-4.inline-block(to="/") {{ $static.metadata.siteName }}
        .float-right
          g-link.p-4.inline-block(to="/news") News
          g-link.p-4.inline-block(to="/guide") Guide
          g-link.p-4.inline-block(to="/docs") Docs
          g-link.p-4.inline-block(to="/support") Support
          a.p-4.inline-block(href='https://discordapp.com/invite/AN8HgWc') Community
        .clearfix
    slot

</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
  import '../assets/main.styl'
</script>
