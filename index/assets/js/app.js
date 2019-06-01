Vue.use(VueRouter)

const app = new Vue({
  router,
  data: {
    lazy: 0,
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
