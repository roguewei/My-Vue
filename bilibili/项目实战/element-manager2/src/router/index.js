import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  // 没有配置的话浏览器路径上显示的是带#的hash路径，配置了该属性就没有#了
  // HTML5的history模式
  mode: 'history'
})

// 3、导出路由
export default router
