<template>
  <div>
    <h2>{{ msg }}</h2>
    <el-button type="info" @click="logout">退出登录</el-button>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      msg: 'this is home page'
    }
  },
  methods: {
    logout() {
      console.log('logout-----------')

      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style></style>
