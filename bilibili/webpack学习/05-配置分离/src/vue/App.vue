<template>
  <div>
    <h2>{{ msg }}</h2>
    <button>按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>

import Cpn from './Cpn'

export default {
  name: "App",
  components: {
    Cpn
  },
  data () {
    return {
      msg: 'hello vue webpack'
    }
  },
  methods: {
    btnClick () { }
  }
}
</script>

<style>
</style>