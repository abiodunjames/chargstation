import Vue from 'vue'
import App from './App.vue'
import api from './services/api'
import BootstrapVue from 'bootstrap-vue'
import store from './services/store'



Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(BootstrapVue)


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
