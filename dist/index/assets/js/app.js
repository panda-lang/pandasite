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
  }
}).$mount('#app')
