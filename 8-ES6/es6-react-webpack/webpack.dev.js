const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        index: "./index"
    },
    output: {
        path: path.resolve(__dirname, '/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        hot: true,
        port: 9000
    },
    module: {
        
    },
    resolve:{
        extensions: ['.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
}