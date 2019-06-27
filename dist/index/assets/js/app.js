Vue.use(VueRouter)

// Padding / Margin directives
// v-pad
// v-pad-xs
// v-pad-left
// v-pad-left-xs

const boxmodels = [ 'padding', 'margin' ]
const cssMobileSizes = [ 'xs', 'sm', 'md', 'lg' ]

const createBoxModelDirective = (model, size) => {
  const boxName = model.substr(0, 3)
  let directiveName = boxName

  if (size != null) {
    directiveName += `-${size}`
  }

  console.log(model, boxName, directiveName)


  Vue.directive(directiveName, function (el, binding) {
    el.classList.add(boxName)
    const name = boxName
      + (binding.arg != null
        ? `-${binding.arg}`
        : '')
      + (size != null
        ? `-${size}`
        : '')

    el.style.setProperty(`--${name}`, `${binding.value}px`)
  })
}

for (const model of boxmodels) {
  const name = model.substr(0, 3)
  createBoxModelDirective(model)

    for (const size of cssMobileSizes) {
      createBoxModelDirective(model, size)
    }
}

const app = new Vue({
  router,
  data: {
    lazy: 0,
    bypassFooter: false,
  },
  created () {
    this.$on('lazy-reset', () => {
      this.lazy = 0
    })

    this.$on('lazy-add', () => {
      this.lazy += 1
    })

    this.$on('lazy-remove', () => {
      this.lazy -= 1

      if (this.lazy <= 0) {
        NProgress.done()
      }
    })
  },
  methods: {
    scrollTo (id, _offset = 0) {
      const el = document.querySelector(`#${id}`)
      if (!el) return

      const nav = document.querySelector('header.navigation')
      const offset = nav ? -nav.offsetHeight : 0

      window.scroll({
        top: el.offsetTop + offset + _offset,
        left: 0,
        behavior: 'smooth',
      })
    },

    scrollPage (_offset = 0) {
      const nav = document.querySelector('header.navigation')
      const offset = nav ? -nav.offsetHeight : 0

      window.scroll({
        top: window.innerHeight + offset + _offset,
        left: 0,
        behavior: 'smooth',
      })
    },

    scrollTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  }
}).$mount('#app')
