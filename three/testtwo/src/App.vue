<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <!-- 3、显示组件 -->
    <test msg="自定义消息" message="自定义message"></test>
    <test
      v-for="pos, index in posts"
      v-bind:key="index"
      v-bind:message="pos"
      @clickout="myclick(pos)"
    ></test>
  </div>
</template>

<script>
// 1、导入自定义组件
import test from './components/test.vue'
export default {
  name: 'App',
  // 2、在此声明组件
  components: {
    test
  },
  methods: {
    myclick: function (str) {
      console.log(str)
    }
  },
  data () {
    return {
      posts: ['aa', 'bb', 'cc'],
      postFontSize: 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
