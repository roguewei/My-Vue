// 自定义组件
<template>
  <div>
    <h1>{{msg}}</h1>
    <h2 class="red" @click="change">{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    message: {
      type: String,
      default: '自定义属性'
    }
  },
  methods: {
    change: function () {
      this.msg = 'change'
      this.$emit('clickout')
    }
  },
  data () {
    return {
      msg: '自定义msg'
    }
  }
}
</script>

<style>
.red {
  color: brown;
}
</style>
