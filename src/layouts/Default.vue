<template lang="pug">
    .layout(style="padding-top: 56px")
        header.panda-header.bg-black.text-white.bg-texture.fixed.z-10.w-full.top-0
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
