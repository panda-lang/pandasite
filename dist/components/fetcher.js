(async () => {
  const { get } = waffle

  for (const component of ["error","error-handler","hero","icon","limg","mapbox","panda-header","panda-hero","panda-news","route-title","waff-footer"]) {
    Vue.component(component, function (resolve, reject) {
      get(`components/${component}.js`).then(response => {
        'use strict'
        const options = new Function(`"use strict";${response};return component`)()

        const { waffle_style, waffle_template } = options

        if (options.lazy) {
          options.methods = options.methods || {}

          options.methods.lazy = function () {
            this.$root.$emit('lazy-remove')
          }

          const bc = options.beforeCreate || function () {}
          options.beforeCreate = function () {
            this.$root.$emit('lazy-add')
            bc.apply(this, arguments)
          }
        }

        const queue = { css: [], js: [] }
        if (options.css) {
          for (const url of options.css) {
            queue.css.push(waffle.import(url))
          }
        }

        if (options.js) {
          for (const [name, url] of Object.entries(options.js)) {
            queue.js.push(waffle.import(url))
          }

          const bc = options.beforeCreate || function () {}
          options.beforeCreate = function () {
            Promise.all(queue.js).then((libs) => {
              libs.forEach((library, i) => {
                const name = Object.keys(options.js)[i]
                this[name] = library.default || library
              })

              this.$emit('imported')
            })

            bc.apply(this, arguments)
          }
        }


        Promise.all([
          (async () => {
            if (waffle_template) {
              const request = await waffle.ajax.get(`components/templates/${component}.tmpl`)
              if (request.success === false) {
                return `<div class="fetcher-error">Cannot fetch ${component} template</div>`
              }

              return request.response
            }
          })(),
          (async () => waffle_style && waffle.loadStyle(component))(),
          ...queue.css,
        ]).then(([ template ]) => {
          if (options.waffle_template) {
            options.template = template.replace(/%view%/g, waffle.view)
          }

          delete options.waffle_style
          delete options.waffle_template

          resolve(options)
        })
      })

    })
  }
})()
