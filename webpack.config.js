const webpackMerge = require('webpack-merge')
const proxy = require('./proxy.config')
var common = require('./webpack.base.js')
var path = require('path')

module.exports = webpackMerge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '8000',
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true, //  新增该配置项 解决反向代理报错
        proxy: proxy
    },
})