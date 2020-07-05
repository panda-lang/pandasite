import '~/assets/default.styl'
import '~/assets/markdown.styl'

import fontawesome from '@fortawesome/fontawesome'
fontawesome.config = { autoReplaceSvg: false }

import App from '~/App.vue'
import NewsMixins from '~/plugins/news-mixins.js'
import highlightPanda from '~/plugins/panda-highlight.js'
import sliderComponent from '~/plugins/vue-slider-component.js'

export default async function (Vue, { router, isClient }) {
  Vue.component('Layout', App)
  Vue.mixin(NewsMixins)
  Vue.use(sliderComponent)

  if (isClient) {
    highlightPanda(Vue, router)
  }
}
