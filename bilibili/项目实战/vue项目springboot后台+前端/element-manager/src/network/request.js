import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/index'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    // 为请求头对象添加Token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  })

  instance.interceptors.response.use(config => {
    if (config.data.status === 10000) {
      Message({
        message: '登录过期',
        type: 'success'
      })
      // 重定向
      router.push('/login')
    }

    return config.data
  })

  return instance(config)
}
