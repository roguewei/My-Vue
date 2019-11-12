// 动态获取路径，需要使用node的语法
const path = require('path')

// commonjs的导出
module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // 这里需要绝对路径，这里使用动态获取路径
    // 拼接路径，__dirname是node自带的全局变量，保存的是本文件所在的路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath，只要设计到URL的东西，都会在前面拼接路径，例如下面的url-loader限制的大于limit大小的图片
    publicPath: 'dist/'
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
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当图片大小小于limit时，会将图片编译成base64字符串形式
              // 当图片大小大于limit时，就需要用到file-loader模块进行加载，因为是直接读取文件URL的形式进行加载
              // 34,099
              limit: 1900,
              // 将文件保存到打包后的文件夹下的img文件夹下，并使用源文件名称，如果没有img文件夹则会自己创建
              // hash:8代表取8位hash值，ext表示扩展名
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
