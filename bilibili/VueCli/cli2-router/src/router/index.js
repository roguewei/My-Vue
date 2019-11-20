import Vue from 'vue'
import Router from 'vue-router'

// 懒加载方式
const Hello = () => import('../components/HelloWorld')
const About = () => import('../components/About')
const User = () => import('../components/User')
const UserNews = () => import('../components/UserNews')
const UserMsg = () => import('../components/UserMsg')
const Profile = () => import('../components/Profile')

// 1、通过Vue.use安装插件
Vue.use(Router)

// 2、创建Router对象
const router = new Router({
  // 3、配置路由和组件之间的映射关系
  routes: [
    {
      path: '/',
      // 首页重定向
      redirect: '/hello',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/hello',
      // name: 'HelloWorld',
      component: Hello,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      // name: 'About',
      component: About,
      // 配置子路由
      children: [
        {
          path: '',
          component: UserNews,
          meta: {
            title: '新闻'
          }
        },
        {
          // 子路由里面不需要加/
          path: 'news',
          component: UserNews,
          meta: {
            title: '新闻'
          }
        },
        {
          path: 'msg',
          component: UserMsg,
          meta: {
            title: '消息'
          }
        }
      ],
      meta: {
        title: '关于'
      }
    },
    {
      // 配置动态路由:userId要在跳转时用的，不能随便写
      path: '/user/:userId',
      // name: 'User',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      // query方式传递参数，即路由后面加?参数名='参数值'
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  // 没有配置的话浏览器路径上显示的是带#的hash路径，配置了该属性就没有#了
  // HTML5的history模式
  mode: 'history',
  // 正在被点击的/活跃状态的组件使用的样式
  linkActiveClass: 'active'
})
// 4、在入口文件（main.js）中挂载router

// 路由全局导航守卫(前置钩子)
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  // next是必须调用的回调函数，代表放行
  next()
})

router.afterEach((to, from) => {
  // console.log('afterEach---------')
})

export default router
