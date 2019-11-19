import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

const config = {
  // url: 'http://127.0.0.1:8001/user/get',
  // url: 'http://127.0.0.1:8001/user/getParam',

  url: 'http://127.0.0.1:8001/user/post',
  // url: 'http://127.0.0.1:8001/user/postParam',
  params: {
    id: 1
  },
  // 指定请求方式
  method: 'post'
}

// 默认是发送get请求
axios(
  // 底层是使用promise请求的，所以会返回一个promise
  config
).then(res => {
  console.log(res)
})
