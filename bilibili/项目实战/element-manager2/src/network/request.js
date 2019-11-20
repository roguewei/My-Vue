import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 10000
  })

  instance.interceptors.request.use(res => {
    return res
  })

  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}
