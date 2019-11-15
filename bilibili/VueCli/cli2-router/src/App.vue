<template>
  <div id="app">
    <!-- vue-router自动注册的全局组件，用于跳转路由 -->
    <router-link to="/hello" replace>首页</router-link>
    <!-- tag可以让router-link的样式变成其他组件样式 -->
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="{path: '/profile', query: { name: userName, age: age}}">档案</router-link>
    <!-- vue-router自动注册的全局组件，用于渲染显示组件 -->
    <router-link :to="'/user/' + userId">用户</router-link>

    <!-- <button @click="helloClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <button @click="profileClick">档案2</button>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'winston',
      userName: 'laogao',
      age: 18
    }
  },
  methods: {
    helloClick () {

      // 实现自定义点击跳转，使用this.$router
      this.$router.push('/hello')

    },
    aboutClick () {
      // 实现自定义点击跳转，使用this.$router
      this.$router.push('/about')
    },
    profileClick () {

      // 实现自定义点击跳转，使用this.$router
      this.$router.push({
        path: '/profile',
        query: {
          name: 'weiagosheng',
          age: 24
        }
      })
    }
  },
  created () {
    console.log('App  created');
  },
  destroyed () {
    console.log("App  destroyed");
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
.active {
  color: red;
}
</style>
