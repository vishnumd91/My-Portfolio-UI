/* eslint-disable no-undef */
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

module.exports = {
    entry: {
      "app": "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },

            {
              test: /\.js$/,
              enforce: 'pre',
              use: ['source-map-loader'],
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

            {
                test: /\.(.png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
              }
        ]
    },

    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),

        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],

    devServer: {
        historyApiFallback: true,
        port: PORT,
        host: 'localhost',
        hot: true,
    }
}
