import '~/assets/default.styl'
import '~/assets/markdown.styl'

import fontawesome from '@fortawesome/fontawesome-free'
fontawesome.config = { autoReplaceSvg: false }

import App from '~/App.vue'
import NewsMixins from '~/plugins/news-mixins.js'
import highlightPanda from '~/plugins/panda-highlight.js'

export default async function (Vue, { router, isClient }) {
  Vue.component('Layout', App)
  Vue.mixin(NewsMixins)
  
  if (isClient) {
    Vue.use(require('~/plugins/vue-slider-component.js'))
    highlightPanda(Vue, router)
  }
}
