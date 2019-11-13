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
