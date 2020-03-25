import '~/assets/global.styl'
import '~/assets/highlight.styl'
import '~/assets/tailwind.css'

import Default from '~/layouts/Default.vue'

/*
import hljs from "highlight.js";

hljs.registerLanguage("panda", hljs => {
    return {
      aliases: ["panda"],
      keywords: {
        keyword:
          "for if while main import module continue break loop method void new shared internal log",
        literal: "true false null",
        type: "String Console Panda"
      },
      contains: [
        {
          className: "class",
          beginKeywords: "class",
          end: /[{;=]/,
          excludeEnd: true,
          keywords: "class interface",
          illegal: /[:"\[\]]/,
          contains: [{ beginKeywords: "extends" }, hljs.UNDERSCORE_TITLE_MODE]
        },
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.NUMBER_MODE
      ]
    };  
});
*/

export default function (Vue, { router, head, isClient }) {
    Vue.component('Layout', Default)

    /*
    router.afterEach((to, from) => {
        Vue.nextTick(_ => {
            document.querySelectorAll("pre code.panda").forEach(block => {
                hljs.highlightBlock(block);
            });
        });
    });
    */
}