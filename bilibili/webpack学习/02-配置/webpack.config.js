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
    filename: 'bundle.js'
  }
}
