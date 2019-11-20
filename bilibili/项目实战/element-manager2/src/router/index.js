import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login')
const Home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  // 没有配置的话浏览器路径上显示的是带#的hash路径，配置了该属性就没有#了
  // HTML5的history模式
  mode: 'history'
})

// 配置路由导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，就放行
  if (to.path === '/login') {
    return next()
  } else {
    // 如果不是登录页就去查是否有token
    const token = window.sessionStorage.getItem('username')
    // 如果没有就跳转到登录
    if (!token) {
      return next('/login')
    }
    next()
  }
})

// 3、导出路由
export default router
