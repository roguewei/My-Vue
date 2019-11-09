// 自定义组件
<template>
  <div>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <h1>{{msg}}</h1>
      <h2 class="red" @click="change">{{message}}</h2>
    </div>
    <button @click="enlargetext">加大字号</button>
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
    },
    enlargetext: function () {
      console.log('enlargetext')
      this.postFontSize += 1
    }
  },
  data () {
    return {
      msg: '自定义msg',
      postFontSize: 1
    }
  }
}
</script>

<style>
.red {
  color: brown;
}
</style>
