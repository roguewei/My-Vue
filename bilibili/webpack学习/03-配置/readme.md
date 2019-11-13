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

# 在终端运行命令 webpack 全部都是使用全局的 webpack 命令，如果需要用局部的 webpack 命令，可以先在 package.json 文件中定义，然后在终端运行 npm run build，这样就会执行局部的 webpack 命令

```
"scripts": {
    "build": "webpack"
  },
```

### 如果需要将 css 也一起模块化打包，需要安装 loader

> `npm install --save-dev css-loader`

> `npm install style-loader --save-dev`

### 如果需要将 less 也一起模块化打包，需要安装 如下 loader

> `npm install --save-dev less-loader less`

# 由于目前打包之后生成的 js 文件是包含 ES5 和 ES6 的，但是某些浏览器不支持 ES6 的语法，可能报错，

# 所以需要安装 babel 工具，将 ES6 的语法转换成 ES5

> `npm install --save-dev babel-loader@7 babel-core babel-preset-es2015`

### 安装完之后配置 webpack.config.js 文件
