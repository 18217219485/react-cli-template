/**
 * development环境的webpack的配置文件
 */
const webpack = require('webpack'); // 访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const apiMocker = require('webpack-api-mocker');
const mocker = path.resolve(__dirname, '../mock/index.js');
module.exports = {
    entry: {
        app: path.join(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 8009, // 端口号
        hot: true, // 是否使用热更新
        compress: true, // 压缩
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'output'), // 从哪里访问文件
        before(app) {
            apiMocker(app, mocker);
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'] // transform-class-properties这babel的四个插件缺一不可
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'less-loader',
                        options: {javascriptEnabled: true}  // 兼容less.3x以及3x以上的版本
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
