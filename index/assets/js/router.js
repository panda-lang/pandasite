const router = new VueRouter({
  mode: 'hash',
  base: `/${_waffle.view}/`,
  routes: Object.keys(routes).map(path => {
    const route = routes[path]

    let name = undefined
    let tpath = route

    if (route.push !== undefined) {
      tpath = route[0]

      if (route.length > 1) {
        name = route[1]
      }
    }

    if (name === undefined) {
      name = slugify(route.replace(/\//g, '-'))
    }

    const component = async _ => {
      const req = await axios.get(`${_waffle.view || 'index'}/${tpath}.tmpl`, { responseType: 'text' })
      const template = req.data.replace(/%view%/g, _waffle.view)
      return {
        template,
        name,

        beforeRouteEnter (to, from, next) {
          NProgress.start()

          next(vm => {
            vm.$root.$emit('lazy-reset')
            setTimeout(() => {
              if (vm.$root.lazy === 0) NProgress.done()
            }, 100)
          })
        }
      }
    }

    return { path, name, component }
  })
})
