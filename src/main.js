import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VScrollLock from 'v-scroll-lock'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './ml'

Vue.use(VScrollLock)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
