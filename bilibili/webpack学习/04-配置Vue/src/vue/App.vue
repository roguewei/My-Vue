<template>
  <div>
    <h2>{{ msg }}</h2>
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
      msg: 'hello vue webpack vue file'
    }
  },
  methods: {
    btnClick () { }
  }
}
</script>

<style>
</style>