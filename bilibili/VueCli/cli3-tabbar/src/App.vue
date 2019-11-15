<template>
  <div id="app">
    <TabBar>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home_active.svg"
        />
        <div slot="item-text">
          首页
        </div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/about.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/about_active.svg"
        />
        <div slot="item-text">
          关于
        </div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/people.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/people_active.svg"
        />
        <div slot="item-text">
          我的
        </div>
      </TabBarItem>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tabbar/news.svg" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/news_active.svg"
        />
        <div slot="item-text">
          新闻
        </div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
