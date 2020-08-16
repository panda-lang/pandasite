import '~/assets/default.styl'
import '~/assets/markdown.styl'

import fontawesome from '@fortawesome/fontawesome'
fontawesome.config = { autoReplaceSvg: false }

import App from '~/App.vue'
import NewsMixins from '~/plugins/news-mixins.js'
import highlightPanda from '~/plugins/panda-highlight.js'

export default async function (Vue, { router, isClient }) {
  Vue.component('Layout', App)
  Vue.mixin(NewsMixins)
  Vue.use(require('~/plugins/vue-slider-component.js'))
  
  if (isClient) {
    highlightPanda(Vue, router)
  }
}
