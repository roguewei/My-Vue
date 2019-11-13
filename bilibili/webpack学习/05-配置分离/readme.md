## 模块化方式引用 vue

```
首先安装vue依赖，由于vue是需要在发布之后也使用的，所以不需要写成--save-dev
1、npm install vue --save

2、配置webpack.config.js
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }

3、编写main.js文件，即引入vue

4、在HTML页面中编写

5、把组件抽取到.vue文件中后，需要配置新的loader
npm install vue-loader vue-template-compiler --save-dev

6、运行命令跑项目
npm run build

注意：如果报错
ERROR in ./src/vue/App.vue
Module build failed: Error: Cannot find module 'webpack/lib/RuleSet'
需要更改package.json里面的"vue-loader": "^15.7.2",
可能是版本太高，修改为"vue-loader": "^13.0.0",
然后重新rpm install
之后rpm run build

```

# 注意！项目中的 webpack 和 vue-loader 的版本对应很重要

# 本项目使用 webpack3.6.0 和 vue-loader13.0.0

```
配置npm run dev命令步骤
1、首先局部安装相关依赖
npm install webpack-dev-server --save-dev
2、在webpack.config.js配置devServer
devServer: {
  // 为哪一个文件夹提供本地服务，默认是根文件夹，本项目写./dist
  contentBase: './dist',
  // 页面实时刷新
  inline: true,
  // 端口号
  prot: 8000
  // 在spa页面中，依赖HTML5的history模式
  // historyApiFallback: ''
}
3、在package.json中配置npm run dev运行脚本
"scripts": {
  "dev": "webpack-dev-server"
},
```

```
配置分离，将webpack.config.js里面的内容抽取到build文件夹下的三个js文件中
然后安装相关依赖
npm install webpack-merge --save-dev
抽取出来之后就不需要webpack.config.js文件了，
然后到package.json文件中修改配置
"build": "webpack --config ./build/prod.config.js",
```
