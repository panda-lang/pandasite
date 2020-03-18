// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import hljs from 'highlight.js'
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/main.styl'
import '~/assets/hljs.styl'

hljs.registerLanguage('panda', hljs => {
    return {
        aliases: ['panda'],
        keywords: {
            keyword: 'for if while main import module continue break loop method void new shared internal log',
            literal: 'true false null',
            type: 'String Console Panda'
        },
        contains: [
            {
                className: 'class',
                beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
                keywords: 'class interface',
                illegal: /[:"\[\]]/,
                contains: [
                    {beginKeywords: 'extends'},
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            hljs.NUMBER_MODE
        ]
    }
})

export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    router.afterEach((to, from) => {
        Vue.nextTick(_ => {
            document.querySelectorAll('pre code.panda').forEach(block => {
                hljs.highlightBlock(block)
            })
        })
    })
}


