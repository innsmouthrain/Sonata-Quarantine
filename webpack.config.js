/* eslint-disable no-unused-vars */
var webpack = require('webpack');
var path = require('path');
/* eslint-enable no-unused-vars */

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './frontend/index.html',
    filename: './index.html'
});

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    entry: {
        app: './index'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    }
};
