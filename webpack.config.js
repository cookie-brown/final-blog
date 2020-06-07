const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const webpack = require('webpack')
// 打包存放的地址
const buildPath = 'dist'
const stylusRegex = /\.css|styl|stylus$/

module.exports = {
    entry: './src/index.tsx', // 编译后自动打开的入口文件
    output: {
        filename: '[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, buildPath),
    },
    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.(js|ts)x?$/, // jsx或者tsx文件
                exclude: /(node_modules)/, // 排除node_modules
                use: {
                    loader: 'happypack/loader?id=es6'
                }
            },
            {
                test: stylusRegex,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader',
                        options: {
                            implementation: require('stylus')
                        }
                    }
                ]
            },
            // 文件识别
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "images/[name].[ext]",
                            limit: 8192,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            title: 'final-blog',
            filename: 'index.html'
        }),
        new HappyPack({
            id: 'es6',
            threadPool: HappyPack.ThreadPool({
                size: os.cpus().length - 1
            }),
            verbose: false,
            loaders: [
                {
                    loader: 'babel-loader'
                }
            ]
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, buildPath),
        historyApiFallback: true,
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    resolve: {
        // 省略后缀，例如'App/index.tsx'可省略为'App/index'
        extensions: ['.js', '.tsx'],
        // 配置别名，避免路径书写过长，例如'../src/components/Nav'可书写为'components/Nav'
        alias: {
            '@': path.resolve('src'),
            'components': path.resolve('src/components'),
            'style': path.resolve('src/style'),
            'images': path.resolve('src/images'),
            'services': path.resolve('src/services'),
            'constants': path.resolve('src/constants'),
            'utils': path.resolve('src/utils'),
        }
    }
}
