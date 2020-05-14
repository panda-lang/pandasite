import '~/assets/default.styl'
import '~/assets/markdown.styl'

import fontawesome from '@fortawesome/fontawesome'
fontawesome.config = { autoReplaceSvg: false }

import App from '~/App.vue'
import NewsMixins from '~/plugins/news-mixins.js'
import highlightPanda from '~/plugins/panda-highlight.js'

export default async function (Vue, { router, head, isClient }) {
  Vue.use(import('~/plugins/vue-slider-component.js'))
  Vue.mixin(NewsMixins)
  Vue.component('Layout', App)

  if (isClient) {
    highlightPanda(Vue, router)
  }
}
