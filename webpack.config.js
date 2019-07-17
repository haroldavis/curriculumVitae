'use strict'

const { join, resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: join(__dirname, 'public', 'index.html'),
            filename: "index.html"
        }),
        new FaviconsWebpackPlugin({
            logo: './public/react.png',
            prefix: 'assets/',
            inject: true,
            background: '#fff',
            title: 'React CV',
            icons: {
            android: true,
            appleIcon: true,
            favicons: true,
            opengraph: false,
            twitter: false,
            }
        }),
    ],
};