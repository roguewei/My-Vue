// 放置只在正式环境需要的配置

// 将打包的js进行压缩的插件
const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
// commonjs的导出
// 合并base.config.js和本文件
module.exports = webpackMerge(baseConfig, {
  // 配置插件
  plugins: [
    // 压缩打包的js代码，在开发阶段可以不用，方便调试，正式打包部署才用
    new uglifyjswebpackplugin()
  ]
})
