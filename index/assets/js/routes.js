const routes = {
  '/': {
    templatePath: 'templates/index',
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          const block = document.querySelector('pre code.panda')
          hljs.highlightBlock(block)
        }, 0)
      })
    }
  },
  '/api/': 'templates/api',
  '/examples/': 'templates/examples',
}
