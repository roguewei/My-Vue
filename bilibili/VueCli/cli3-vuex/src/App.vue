<template>
  <div id="app">
    <h2>{{ msg }}</h2>

    <h4>{{ $store.state.counter }}</h4>
    <h3>{{ $store.getters.powerCount }}</h3>
    <h3>大于20岁的学生：{{ $store.getters.studentAge }}</h3>
    <h3>学生大于20岁的个数：{{ $store.getters.studentAgeLength }}</h3>
    <h3>动态传参：{{ $store.getters.studentAgeBig(17) }}</h3>

    <h1>---------modules 中的内容----------</h1>
    <h4>{{ $store.state.modA.name }}</h4>
    <button @click="updateName">修改</button>

    <button @click="add()">+</button>
    <button @click="sub()">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="subCount(5)">-5</button>
    <button @click="subCount(10)">-10</button>

    <button @click="updateStudent">修改</button>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'vuex study'
    }
  },
  methods: {
    add() {
      // 修改vuex里面的属性，需要用commit方法，传入vuex里面mutations的方法名
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    },
    // mutations接收参数
    addCount(count) {
      // 第一种方式
      // this.$store.commit('incrementCount', count)

      // 第二种方式
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    subCount(count) {
      this.$store.commit('decrementCount', count)
    },
    updateStudent() {
      // this.$store.commit('updateStudent')
      this.$store.dispatch('aupdateStudent')
    },
    updateName() {
      this.$store.commit('updateName', {
        name: 'lisi'
      })
    }
  }
}
</script>

<style></style>
