const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = webpackMerge(baseConfig, {
    mode: 'production',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../server/static'),
        filename: '[name].js'
    },
    entry: {
        clientRender: path.resolve(__dirname, '../client/render/client.js')
    },
    // externals: [/\.css$/,/\.sass$/,/\.jpg$/],
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|svg|eot|jpg)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 81920,
                            mimetype:'images/png',
                            name: 'images/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    'postcss-loader'
                ]
            },
            // {
            //     test: /\.(scss|sass)$/,
            //     use: [
            //         'isomorphic-style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true,
            //                 sourceMap: false
            //             }
            //         },
            //         'postcss-loader',
            //         'sass-loader'
            //     ]
            // },
            {
                test: /\.less$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            plugins: [
                                new LessPluginFunctions()
                            ],
                            //匹配import引入的根路径
                            paths:[
                                path.join(__dirname, '../client/src'),
                                path.join(__dirname, '../node_modules')
                            ],
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             ie8: true,
        //             ecma: 8
        //         }
        //     })
        //清除无用的代码
        usedExports:true,
        // 抽离公用的js部分 , 配置自动提取node_modules里用到的模块如jquery
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /\.js$/,
                    chunks: 'all', //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
                    enforce: true
                },
            }
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            },
        })
    ]
});

module.exports = config;