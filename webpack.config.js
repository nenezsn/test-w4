var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');//生成html
var MiniCssExtractPlugin = require('mini-css-extract-plugin');//提取css
var { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除工程产物
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:()=>[require('autoprefixer')({
                                browsers:['last 2 version']
                            })]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: '10000'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello wp4',
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
          })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '8000',
        hot: true
    }
}