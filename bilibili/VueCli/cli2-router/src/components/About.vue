<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-link to="/about/news">新闻</router-link>
    <router-link to="/about/msg">消息</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      msg: '我是About 页面',
      path: '/about/news'
    }
  },
  methods: {
    btnClick () { }
  },
  // 在组建中使用了keep-alive时才有效
  activated () {
    console.log(this.path);

    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  },
  created () {
    console.log('About  created');
  },
  destroyed () {
    console.log("About  destroyed");
  }
}
</script>
<style>
</style>