import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/global.styl'
import './assets/highlight.styl'
import './assets/tailwind.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')