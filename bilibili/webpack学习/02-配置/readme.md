## webpack 打包

· main.js 引用了 mathUtils.js 的模块，在 index.html 中引用 js 不能直接如下引用：

> `<script src="./src/mathUtils.js"></script>`

> `<script src="./src/mathUtils.js"></script>`

---

· 而是需要用 webpack 打包之后，引用打包出来的新 js 文件
· 配置 webpack.config.js 文件，即可直接使用 webpack 命令打包

### 注意，需要使用 node 语法的时候，最好先运行 npm inint 命令，运行之后会生成 package.json 文件

> `npm init`

### 如果 package.json 文件中有使用到依赖，则再运行 npm install 进行依赖安装

> `npm install`

> `执行打包`

> `webpack`

# 在终端运行命令 webpack 全部都是使用全局的 webpack 命令，如果需要用局部的 webpack 命令，可以先在 package.js 文件中定义，然后在终端运行 npm run build，这样就会执行局部的 webpack 命令

```
"scripts": {
    "build": "webpack"
  },
```
