// 放置只在开发环境需要的配置

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// commonjs的导出
module.exports = webpackMerge(baseConfig, {
  // 本地服务器配置(需要先下载webpack-dev-server依赖)
  devServer: {
    // 为哪一个文件夹提供本地服务，默认是根文件夹，本项目写./dist
    contentBase: './dist',
    // 页面实时刷新
    inline: true,
    // 端口号
    port: 8000
    // 在spa页面中，依赖HTML5的history模式
    // historyApiFallback: ''
  }
})
