<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon" />
    </div>
    <div v-else>
      <slot name="item-icon-active" />
    </div>
    <div :style="activeStyle">
      <slot name="item-text" />
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" />
    <div>
      首页
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      msg: 'hello vue webpack vue file'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path)
      }
    }
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
</style>
