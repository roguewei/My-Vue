const Login = () => import('../views/Login/Login')
const Home = () => import('../views/Home/Home')
const Welcome = () => import('../views/Home/children/Welcome')
const User = () => import('../views/Home/children/User')
const Permission = () => import('../views/Home/children/Permission')
const Role = () => import('../views/Home/children/Role')

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
    component: Home,
    // 当来到/home页面时进行重定向
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/user',
        component: User
      },
      {
        path: '/permission',
        component: Permission
      },
      {
        path: '/role',
        component: Role
      }
    ]
  }
]

export default routes
