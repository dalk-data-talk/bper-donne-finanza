import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VScrollLock from 'v-scroll-lock'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './ml'
import VueMq from 'vue-mq'

Vue.use(VScrollLock)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)
Vue.use(VueCarousel);

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 450,
    tablet: 1250,
    desktop: Infinity,
  },
  defaultBreakpoint: 'mobile' // customize this for SSR
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
