const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 打包存放的地址
const buildPath = 'dist'
const stylusRegex = /\.css|styl|stylus$/

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'), // 编译后自动打开的入口文件
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/, //jsx或者tsx文件
                exclude: /(node_modules)/, // 排除node_modules
                use: {
                    loader: 'babel-loader'
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
                test: /\.(png|jpg|gif|woff|svg|ttf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            title: 'final-blog',
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, buildPath),
        compress: true,
        port: 9000
    },
    resolve: {
        // 省略后缀，例如'App/index.tsx'可省略为'App/index'
        extensions: ['.js', '.tsx'],
        // 配置别名，避免路径书写过长，例如'../src/components/Nav'可书写为'components/Nav'
        alias: {
            '@': path.resolve('src'),
            'components': path.resolve('src/components')
        }
    }
}
