//客户端代码打包 production
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const LessPluginFunctions = require('less-plugin-functions');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
//压缩css文件
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const config = webpackMerge(baseConfig, {
  mode: 'production',
  target: 'node',
  output: {
    publicPath: "/",
    path: path.join(__dirname, '../server/static'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    // library: 'MyClient'
  },
  entry: {
    serverRender: path.resolve(__dirname, "../client/render/production.server.js")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
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
        test: /\.less$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [
                new LessPluginFunctions()
              ],
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
    nodeEnv: 'production',
    // 压缩js、css
    minimizer: [
      new optimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true },
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })
    ],
    //清除无用的代码
    usedExports:true,
    // 抽离公用的js部分, 配置自动提取node_modules里用到的模块如jquery
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\.js$/,
          chunks: "async", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
          enforce: true
        },
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['static'],{
      root: path.resolve(__dirname, '../server'),
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径文件
        path.resolve(__dirname, '../src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, '../src/*.js')
      ])
    })
  ]
});

module.exports = config;
