if (!routes['*']) {
  routes['*'] = {
    name: 'not-found',
    data () {
      return { err: {
        name: 'Route not found.',
        message: 'The client has not found anything matching the Request-URI.',
        status: 404,
      } }
    }
  }
}

const compileRoute = r => {
  const getName = n => n.replace(/\//g, '-')

  if (Array.isArray(r)) {
    return {
      templatePath: r[0],
      name: r[1] || slugify(getName(r[0])),
    }
  }

  if (typeof r === 'string') {
    return {
      templatePath: r,
      name: slugify(getName(r)),
    }
  }

  if (!r.templatePath && !r.template && !r.render) {
    r.template = ''
  }

  return r
}

const router = new VueRouter({
  mode: 'hash',
  base: `/${_waffle.view}/`,
  routes: Object.keys(routes).map(path => {
    const route = compileRoute(routes[path])

    const component = async _ => {
      let err = false
      let template = route.template || ''

      if (route.templatePath) {
        try {
          const req = await axios.get(`${_waffle.view || 'index'}/${route.templatePath}.tmpl`, { responseType: 'text' })
          template = req.data.replace(/%view%/g, _waffle.view)
        } catch (e) {
          err = {
            name: 'Template not found.',
            message: `Template file for route ${path} not found.`,
            status: 404,
          }
        }
      }

      return {
        ...route,
        template: `<main><error-handler :err="err || false">${template}</error-handler></main>`,

        data () {
          if (route.data) {
            const res = route.data.call(this)
            return { err, ...res }
          }

          return { err }
        },

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
