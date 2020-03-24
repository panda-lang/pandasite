<template lang="pug">
    div
        .container.mx-auto.mt-12
            h1.mx-6 News
            .news-list.mx-12
                each val in [1, 2, 3, 4, 5, 6]
                    article.w-1-1.xl_w-1-2
                        h3= 'Title ' + val
                        p= 'Description ' + val
</template>

<script>
export default {
    metaInfo: {
        title: 'News'
    }
}
</script>

<style lang="stylus">
.news-list article
    background-color #f1f1f1
    margin-top: 27px
    padding 17px

.news-list h3
    padding 7px

.news-list p
    color grey
    padding 7px
</style>