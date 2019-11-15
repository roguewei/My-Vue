import Vue from 'vue'
import App from './App'
// 5/导入的router目录，会自动识别index.js
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载路由
  router,
  render: h => h(App)
})

console.log(router)
