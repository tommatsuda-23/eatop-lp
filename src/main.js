// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/router'

// import fontawesome modules
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faFacebook, faInstagram, fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// register global sass file
require('@/assets/sass/styles.sass')

new Vue({
  render: h => h(App),
  router
}).$mount('#app')