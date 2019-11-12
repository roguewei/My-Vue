## webpack 打包

· main.js 引用了 mathUtils.js 的模块，在 index.html 中引用 js 不能直接如下引用：

> `<script src="./src/mathUtils.js"></script>`

> `<script src="./src/mathUtils.js"></script>`

---

· 而是需要用 webpack 打包之后，引用打包出来的新 js 文件

> `执行打包`

> `webpack .\src\main.js .\dist\bundle.js`

· index.html 中引用新的 js

> `<script src="./dist/bundle.js"></script>`
