<template>
  <div class="tab-bar-item">
    <div v-if="isActive">
      <slot name="item-icon" />
    </div>
    <div v-else="isActive">
      <slot name="item-icon-active" />
    </div>
    <div :class="{ active: !isActive }">
      <slot name="item-text" />
    </div>
    <!-- <img src="../..//assets/img/tabbar/home.svg" />
    <div>
      首页
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      msg: 'hello vue webpack vue file',
      isActive: false
    }
  },
  methods: {
    btnClick() {}
  }
}
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去掉img标签下自带的空间 */
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: rgb(221, 2, 2);
}
</style>
