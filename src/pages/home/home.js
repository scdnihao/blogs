import Vue from 'vue'
import Home from './home.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#home')
