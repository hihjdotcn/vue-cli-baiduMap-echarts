import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype._echarts = Echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
