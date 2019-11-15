<template>
  <div>
    <h2>{{ msg }}</h2>
    <h1>{{userId}}</h1>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      msg: '这里是用户界面'
    }
  },
  methods: {
    btnClick () { }
  },
  computed: {
    userId () {
      // this.$route拿到的是当前活跃状态的路由
      // console.log(this.$route);

      return this.$route.params.userId
    }
  },
  created () {
    console.log('User  created');
  },
  destroyed () {
    console.log("User  destroyed");
  }
}
</script>
<style>
</style>