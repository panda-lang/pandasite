import highlight from 'highlight.js'

export default function (Vue, router) {
  Vue.prototype.$hljs = highlight

  highlight.registerLanguage('panda', highlight => {
    return {
      aliases: ['panda'],
      keywords: {
        keyword:
          'for if while main import module continue break loop method void new shared internal log type',
        literal: 'true false null',
        type: 'String Console Panda'
      },
      contains: [
        {
          className: 'class',
          beginKeywords: 'class',
          end: /[{;=]/,
          excludeEnd: true,
          keywords: 'class interface',
          illegal: /[:"[\]]/,
          contains: [
            { beginKeywords: 'extends' },
            highlight.UNDERSCORE_TITLE_MODE
          ]
        },
        highlight.C_BLOCK_COMMENT_MODE,
        highlight.C_LINE_COMMENT_MODE,
        highlight.QUOTE_STRING_MODE,
        highlight.APOS_STRING_MODE,
        highlight.NUMBER_MODE
      ]
    }
  })

  router.afterEach(() => {
    Vue.nextTick(_ => {
      document.querySelectorAll('pre code.panda').forEach(block => {
        highlight.highlightBlock(block)
      })
    })
  })
}
