<template>
  <div id="tab-bar">
    <!-- 放入插槽slot，在其他组件中就可以插入其他组件 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data() {
    return {
      msg: 'hello vue webpack vue file'
    }
  },
  methods: {
    btnClick() {}
  }
}
</script>
<style>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 1px rgba(197, 197, 197, 0.4);
}
</style>
