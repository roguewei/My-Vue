import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 将路由挂载到Vue实例上
  router,
  render: h => h(App)
}).$mount('#app')
