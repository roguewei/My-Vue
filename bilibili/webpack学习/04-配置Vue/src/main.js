// 使用commonjs的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(1, 2))
console.log(mul(2, 3))

// es6的模块化规范
import { name, age } from './js/info'

console.log(name)
console.log(age)

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')

// 引入vue模块
import Vue from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

// 抽取到app.js然后导入
// const App = {
//   template: `
//     <div>
//       <h2>{{ msg }}</h2>
//     </div>
//   `,
//   data() {
//     return {
//       msg: 'hello vue webpack new'
//     }
//   },
//   methods: {
//     btnClick() {}
//   }
// }

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
