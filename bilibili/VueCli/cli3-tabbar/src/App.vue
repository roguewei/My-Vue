<template>
  <div id="app">
    <!-- 占位显示路由定义的页面 -->
    <router-view></router-view>
    <MainTabBarItem />
    <!-- <TabBarItem path="/home" activeColor="#6633FF">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home_active.svg"
        />
        <div slot="item-text">
          首页
        </div>
      </TabBarItem>
      <TabBarItem path="/about" activeColor="#6633FF">
        <img slot="item-icon" src="./assets/img/tabbar/about.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/about_active.svg"
        />
        <div slot="item-text">
          关于
        </div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="#6633FF">
        <img slot="item-icon" src="./assets/img/tabbar/people.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/people_active.svg"
        />
        <div slot="item-text">
          我的
        </div>
      </TabBarItem>
      <TabBarItem path="/news" activeColor="#6633FF">
        <img slot="item-icon" src="./assets/img/tabbar/news.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/news_active.svg"
        />
        <div slot="item-text">
          新闻
        </div>
      </TabBarItem> -->
  </div>
</template>

<script>
import MainTabBarItem from './components/tabbar/MainTabBarItem'

export default {
  name: 'app',
  components: {
    MainTabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
