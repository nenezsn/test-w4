/**
 * @description 用于本地调试 
 */
const path = require('path')
const webpack = require('webpack')
const Status = require('./plugins')

module.exports = {
    entry: path.resolve(__dirname, 'test/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: path.resolve('./loaders/const'),
                include: path.join(__dirname, 'test'),
            },
        ]
    },
    plugins: [
        new Status()
    ],
    resolve: {
        extensions: ['.jsx', '.js', 'css'],
    },
    mode: 'development'//默认是production 生产环境
}
