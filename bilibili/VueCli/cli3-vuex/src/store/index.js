import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

// 1、安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      console.log(payload)

      state.name = payload.name
    }
  },
  actions: {},
  getters: {}
}

// 2、创建对象
const store = new Vuex.Store({
  // 通过直接修改state里面的属性的话，可以修改成功，但是devtools不能跟踪到是谁修改的
  state: {
    counter: 0,
    student: [
      { id: 1, name: 'winston', age: 18 },
      { id: 2, name: 'kobe', age: 24 },
      { id: 3, name: 'james', age: 23 }
    ]
  },
  // 修改属性值需要从mutations里面修改
  mutations,
  // 异步操作在action里面处理
  actions: {
    aupdateStudent(context) {
      setTimeout(() => {
        context.commit('updateStudent')
      }, 1000)
    }
  },
  // 类似于组件的计算属性
  getters: {
    powerCount(state) {
      return state.counter * state.counter
    },
    studentAge(state) {
      return state.student.filter(s => s.age > 20)
    },
    // getters的方法作为参数
    studentAgeLength(state, getters) {
      return getters.studentAge.length
    },
    // 当需要接受外部穿进来的参数
    studentAgeBig(state) {
      // return function(age) {
      //   return state.student.filter(s => s.age >= age)
      // }
      return age => {
        return state.student.filter(s => s.age > age)
      }
    }
  },
  // state分模块
  modules: {
    // 这里定义的模块名modA会自动添加到上面总的state里面，所以外部可以通过$store.state.modA来使用
    modA: moduleA
  }
})

// 3、导出store
export default store
