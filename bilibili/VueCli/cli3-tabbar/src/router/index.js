import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载方式
const Home = () => import('../views/home/Home')
const About = () => import('../views/about/About')
const News = () => import('../views/news/News')
const Profile = () => import('../views/profile/Profile')

// 1、安装插件
Vue.use(VueRouter)

// 封装路由抽取
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      title: '新闻'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]

// 2、创建路由对象
const router = new VueRouter({
  routes,
  // 没有配置的话浏览器路径上显示的是带#的hash路径，配置了该属性就没有#了
  // HTML5的history模式
  mode: 'history'
})

// 3、导出路由
export default router
