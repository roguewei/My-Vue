// 动态获取路径，需要使用node的语法
const path = require('path')

// 添加插件（可用可不用）
// const webpack = require('webpack')
// 将src下的HTML文件打包到dist下
const htmlWebpackPlugin = require('html-webpack-plugin')
// 将打包的js进行压缩的插件
const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')
// commonjs的导出
module.exports = {
  // 配置插件
  plugins: [
    // new webpack.BannerPlugin('使用插件案例'),
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    // 压缩打包的js代码，在开发阶段可以不用，方便调试，正式打包部署才用
    new uglifyjswebpackplugin()
  ],
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // 这里需要绝对路径，这里使用动态获取路径
    // 拼接路径，__dirname是node自带的全局变量，保存的是本文件所在的路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // publicPath，只要涉及到URL的东西，都会在前面拼接路径，例如下面的url-loader限制的大于limit大小的图片
    // publicPath: './dist/'
  },
  // 配置模块规则，test为规则，匹配到该模式的就使用use里面的loader
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责加载css，不负责解析，所以只有这个得话界面样式是不会有效果的
        // style-loader负责讲样式添加到DOM中
        // 注意：使用多个loader时，是从右向左读取的，所以css-loader需要先被读取
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      // 配置ES6转ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 查找npm install 的babel-preset-es2015里面的es2015文件
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 配置import时是否忽略后缀
    extensions: ['.js', '.css', '.less', '.vue'],
    alias: {
      // 当js文件中import了vue之后，会来到此处查找配置的文件夹
      // 此处配置的是node_modules/vue/dist/vue.esm.js
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  // 本地服务器配置(需要先下载webpack-dev-server依赖)
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
}
