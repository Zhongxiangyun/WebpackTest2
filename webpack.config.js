

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map', //开发调试工具，生厂环境一定要关闭
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后文件存放位置
        filename: 'bundle.js' //打包后输出文件的文件名
    },

    //添加server服务和实时编译工具
    devServer: {
        contentBase: './public',//本地服务器加载的所在目录
        historyApiFallback: true,//不跳转
        inline: true, //激活实时刷新
        hot: true


    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                          "es2015", "react"
                      ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'

                    },{
                        loader: 'css-loader',
                        options: {
                           // modules: true
                        }

                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有 翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + '/app/index.temp.html'
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};