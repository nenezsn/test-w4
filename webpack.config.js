const webpackMerge = require('webpack-merge')
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
        proxy: {
            "/api": {
                target: "http://yapi.demo.qunar.com/mock/97860/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    },
})