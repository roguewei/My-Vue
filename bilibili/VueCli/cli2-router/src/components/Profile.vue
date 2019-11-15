<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{queryparams}}</h2>
    <button @click="myclick">查看参数</button>
    <button @click="goback">返回</button>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'this is profile'
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
    myclick () {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  computed: {
    queryparams () {
      // console.log(this.$route);
      return this.$route.query.name
    }
  },
  created () {
    console.log("profile  created");

  },
  destroyed () {
    console.log("profile  destroyed");
  }
}

</script>
<style>
</style>