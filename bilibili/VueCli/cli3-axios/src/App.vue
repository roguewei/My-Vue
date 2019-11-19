<template>
  <div id="app">
    <button @click="send">请求</button>
    <p v-for="item in backdata">
      {{ item }}
    </p>

    <!-- <button @click="sendSync">同步请求</button> -->

    <!-- <h1>-----------------------------------</h1>
    <Hello /> -->
  </div>
</template>

<script>
// 1、学习-----------
// import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:8001'
// // 毫秒
// axios.defaults.timeout = 10000
// // axios.defaults.headers.post['Content-type'] =
// //   'application/x-www-form-urlencoded'

// export default {
//   name: 'app',
//   data() {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       backdata: ''
//     }
//   },
//   methods: {
//     send() {
//       const config = {
//         // url: '/user/get',
//         // url: '/user/getParam',

//         // url: '/user/post',
//         url: '/user/postParam',
//         // params: {
//         //   id: 1
//         // },
//         data: {
//           id: 1
//         },
//         // 指定请求方式
//         method: 'post'
//       }

//       // 默认是发送get请求
//       axios(
//         // 底层是使用promise请求的，所以会返回一个promise
//         config
//       ).then(res => {
//         console.log(res)
//         this.backdata = res.data.data
//       })
//     },
//     sendSync() {
//       axios
//         .all([
//           axios({
//             url: '/user/get'
//           }),
//           axios({
//             url: '/user/getParam',
//             params: {
//               id: 3
//             }
//           })
//         ])
//         .then(res => {
//           console.log(res)
//         })
//       // .then(
//       //   axios.spread((res1, res2) => {
//       //     console.log(res1)
//       //     console.log(res2)
//       //   })
//       // )
//     }
//   }
// }

// // 2、常规场景下应该创建axios实例，封装公共部分
// import axios from 'axios'
// import Hello from './components/Hello'
// const instance1 = axios.create({
//   baseURL: 'http://127.0.0.1:8001',
//   timeout: 5000
// })
// export default {
//   name: 'app',
//   components: {
//     Hello
//   },
//   data() {
//     return {
//       msg: 'Welcome to Your Vue.js App',
//       backdata: ''
//     }
//   },
//   methods: {
//     send() {
//       instance1({
//         url: '/user/get'
//       }).then(res => {
//         this.backdata = res.data.data
//       })
//     },
//     sendSync() {
//       axios
//         .all([
//           instance1({
//             url: '/user/get'
//           }),
//           instance1({
//             url: 'user/getParam',
//             params: {
//               id: 1
//             }
//           })
//         ])
//         .then(res => {
//           console.log(res)
//         })
//     }
//   }
// }
// 3、使用封装的axios
import { request } from './network/request'

export default {
  name: 'app',
  data() {
    return {
      backdata: ''
    }
  },
  methods: {
    // // 对应request里的方式一
    // send() {
    //   request(
    //     {
    //       url: '/user/get'
    //     },
    //     res => {
    //       console.log(res)
    //     },
    //     err => {
    //       console.log(err)
    //     }
    //   )
    // }
    // // 对应request里的方式二
    // send() {
    //   request({
    //     baseConfig: '/user/get',
    //     success: res => {
    //       console.log(res)
    //     },
    //     failure: err => {
    //       console.log(err)
    //     }
    //   })
    // }

    // 对应request里的方式三
    send() {
      request({
        url: '/user/get'
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
