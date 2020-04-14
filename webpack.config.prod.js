const webpackMerge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')
var common = require('./webpack.base.js')

const baseUrl = 'https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_portal/1585028489957/dist/'

module.exports = webpackMerge(common, {
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist'),
        publicPath: baseUrl
    },
    optimization:{
        minimizer:[
            new TerserPlugin()
        ]
    },
    mode: 'production'
})