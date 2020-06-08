var path = require('path')
var webpack = require('webpack')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')//抽离公共包
var HtmlWebpackPlugin = require('html-webpack-plugin');//生成html
var MiniCssExtractPlugin = require('mini-css-extract-plugin');//提取css
var { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除工程产物
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');//webpack simple log
var CopyWebpackPlugin = require('copy-webpack-plugin');//将某个目录直接拷贝到dist

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const theme = require('./theme.js')

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        chunkFilename:"[name].[hash:8].js",
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: SRC_PATH,
                use: [
                    // 'thread-loader',
                    'babel-loader'
                ]
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
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                include: SRC_PATH,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: theme,
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'image/[name].[hash:8].[ext]',
                        limit: '10000',
                        outputPath: 'image/'
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
            template: path.join(__dirname, 'public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new webpack.DefinePlugin({
            'env': JSON.stringify('local')
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname,'public'), to: path.join(__dirname,'dist') },
        ]),
        new FriendlyErrorsWebpackPlugin(),
        new ProgressBarPlugin({
            format:
                'build [:bar]' +
                chalk.green.bold(':percent') +
                ' (:elapsed)',
            width: 40
        }),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry: 'https://cdn.bootcss.com/react/16.8.1/umd/react.production.min.js',
        //             global: 'React',
        //         }, {
        //             module: 'react-dom',
        //             entry: 'https://cdn.bootcss.com/react-dom/16.8.1/umd/react-dom.production.min.js',
        //             global: 'ReactDom',
        //         }
        //     ],
        // })
    ],
    resolve: {
        modules: [path.resolve('node_modules')],
        extensions: ['.js'],
        alias: {
            '@util': path.resolve(__dirname, 'src/util'),
        }
    },
    externals: {
        'react-dom': 'ReactDOM',
        'react': 'React'
    },
    stats: 'errors-only'
}