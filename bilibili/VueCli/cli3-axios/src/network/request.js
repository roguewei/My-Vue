// 封装网络请求
import axios from 'axios'

// 方式一、
// export function request(config, success, failure) {
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8001',
//     timeout: 5000
//   })

//   // 方式一、
//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       failure(err)
//     })

// }

// // 方式二
// export function request(config) {
//   // 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8001',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res)
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       config.failure(err)
//     })
// }

// // 方式三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://127.0.0.1:8001',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })

//   })
// }

// 方式三简化版，最终方案
export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(
    // config、err名字可以任意定义
    config => {
      // 请求成功执行
      // 常见场景
      // 1、config中的一些信息不符合服务器的要求
      // 2、每次发送网络请求时，都希望在界面中显示一个请求的图标
      // 3、某些网络请求（比如登录），必须带一些特殊的信息
      console.log(config)

      return config
    },
    err => {
      // 请求失败执行
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    res => {
      console.log(res)
      // 正常不需要返回整个axios封装的数据，只取服务器自己返回的数据就可以
      return res.data
    },
    err => {
      console.log(err)
    }
  )

  // 发送真正的网络请求
  return instance(config)
}
