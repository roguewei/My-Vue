# cli3-vuex

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```
使用：
1、npm安装vuex
npm install vuex --save

2、创建文件，本项目在src-store下的index.js
需要共享的变量放到
state: {
    counter: 0
  },
然后在其他组件中使用：
$store.state.counter

如果需要修改，需注意mutation里面做的操作是同步的，action里面做异步的。
```
