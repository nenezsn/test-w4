const webpackMerge = require('webpack-merge')
var common = require('./webpack.base.js')
module.exports = webpackMerge(common,{
    mode:'production'
})