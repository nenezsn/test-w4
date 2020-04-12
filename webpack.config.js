var path = require('path')
var webpack = require('webpack')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
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
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: [
                    'style-loader',
                    "css-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                browsers: ['last 2 version']
                            })]
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
        }),
        new webpack.DefinePlugin({
            'env': JSON.stringify('local')
        }),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //         {
        //             module: 'react',
        //             entry: 'https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js',
        //             global: 'React',
        //         }, {
        //             module: 'react-dom',
        //             entry: 'https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js',
        //             global: 'ReactDom',
        //         }
        //     ],
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: '8000',
        hot: true
    }
}