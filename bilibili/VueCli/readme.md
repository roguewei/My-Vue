# 脚手架需要环境

```
node, npm, webpack
node需要10.x+
1、安装全局webpack
npm install webpack -g

2、安装全局脚手架
这里默认安装的是脚手架3，如果要安装2版本的话需要另外拉取
npm install -g @vue/cli
拉取2.x版本的vue/cli
npm install -g @vue/cli-init

3、创建脚手架项目
cli2版本：
vue init webpack 项目名
cli3版本：
vue create 项目名
```

# cli 项目知识点

```bash
# 创建项目时选择runtime-compiler和runtime-only
runtime-compiler从代码到UI显示过程
template -> ast -> render -> vdom -> UI

runtime-only从代码到UI显示过程
rander -> vdom - > UI

runtime-only中的render
new Vue({
  el: '#app',
  render: function(createElement){
    // createElement('标签', {标签的属性})
    return createElement('h2')
  }
}）
会把el中的#app的内容给替换掉，最后就显示<h2></h2>
```

# cli3 与 cli2 的区别

```
cli3是基于webpack4打造，cli2还是webpack3
cli3的设计原则是”0配置“，移除的配置文件根目录下的build和config等目录
cli3提供了vue ui命令，提供了可视化配置，更加人性化
移除了static文件夹，新增了public文件夹，并且index.html移动到public中
```

### 路由 router

```
SPA：单页面富应用
在前后端分离的基础上加了一层前端路由
核心：改变URL，但是页面不进行整体刷新

URL的hash
URL的hash就是锚点（#），本质上是改变window.location的href属性

```

```
路由的安装和使用
npm install vue-router --save

导入路由对象，并调用Vue.use(VueRouter)
创建路由实例，并且传入路由映射配置
在Vue实例中挂载创建的路由实例

用脚手架创建的项目如果选择了router的话就不需要手动安装和导入
```

### 配置页面路由

```
1、创建vue模板页面，并导出
2、修改router下的Index.js文件，配置路由映射关系
```

### 打包抽离 js

```
打包的dist文件夹下static下的js文件夹下，分离了几个js
app.xxxx.js的文件是当前应用程序开发的所有代码（自己手动写的业务代码）
vendor.xxxx.js的文件是第三方（如vue，vue-router，axios）的代码
manifest.xxxx.js的文件是为了打包的代码做底层支撑的
```

### 懒加载

```
修改router的index.js文件下的路由配置
例如将原来的代码：
import HelloWorld from '../components/HelloWorld'
{
  path: '/hello',
  // name: 'HelloWorld',
  component: HelloWorld
},
修改成：
{
  path: '/hello',
  component: () => import('../components/About')
}
这样打包之后的js就会分开
```

### 配置子路由

```
1、创建vue模板文件

2、配置路由index.js
const User = () => import('../components/User')
const UserNews = () => import('../components/UserNews')
const UserMsg = () => import('../components/UserMsg')
{
  // 配置动态路由:userId要在跳转时用的，不能随便写
  path: '/user/:userId',
  // name: 'User',
  component: User,
  // 配置子路由
  children: [
    {
      // 子路由里面不需要加/
      path: 'news',
      component: UserNews
    },
    {
      path: 'msg',
      component: UserMsg
    }
  ]
}

3、在user模板下添加<router-view></router-view>
```

### keey-alive

```
用于保存组件状态，避免被重新渲染
include：字符串或正则表达式，只有匹配的组件会被缓存
exclude：字符串或正则表达式，任何匹配的组件都不会被缓存
```

### promise

```
promise是异步变成的一种解决方案
常见使用场景：网络请求
```

### Vuex

```
vue应用程序开发的状态管理模式
简而言之，就是把多个组件共享的变量全部存储在一个对象里面，然后将这个对象放到顶层的vue实例中，
让其他组件可以使用

```

### axios

```
1、安装axios
npm install axios --save
2、导入
import axios from 'axios'
3、使用
参考main.js

请求方式：
axios(config)
axios.request(config)
axios.get(url[, config])
axios.delete(url[, coinfig])
axios.head(url[, config])
axios.post(url[, data, config])
axios.put(url[, data, config])
axios.patch(url[, data, config])

请求的参数问题：
params是发送get请求时传递的
data是发送post请求时传递的
```
