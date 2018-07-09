/**
 * production环境的webpack配置文件
 */
const webpack = require('webpack'); // 访问内置插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../output'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CleanWebpackPlugin(['output']),
        new UglifyjsWebpackPlugin({
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            title: 'react-cli',
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html'
        })
    ]
};
