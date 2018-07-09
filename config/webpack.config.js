/**
 * development环境的webpack的配置文件
 */
const webpack = require('webpack'); // 访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 8009, // 端口号
        hot: true, // 是否使用热更新
        compress: true, // 压缩
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'output') // 从哪里访问文件
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    },
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
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
