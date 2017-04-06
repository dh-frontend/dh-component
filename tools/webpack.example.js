'use strict';

const path                   = require('path');

const webpack                = require('webpack');
const marked                 = require("marked");
const utils                  = require('steamer-webpack-utils');
const config                 = require('../config/project');
const configWebpack          = config.webpack;
const HtmlResWebpackPlugin   = require('html-res-webpack-plugin');
const ExtractTextPlugin      = require("extract-text-webpack-plugin");

const Clean = require('clean-webpack-plugin');
const renderer = new marked.Renderer();

const webpackConfig = {
    entry: {
        "index": [path.join(configWebpack.path.example, "index.js")],
    },
    output: {
        path: path.join(configWebpack.path.example, "dev"),
        filename: "[name].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    "plugins": [
                        "react-hot-loader/babel",
                        "transform-decorators-legacy"
                    ],
                    "presets": [
                        ["es2015", {"loose": true, "modules": false}],
                        "react",
                        "stage-0"
                    ]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?-autoprefixer&localIdentName=[name]-[local]-[hash:base64:5]?postcss-loader!less-loader?root=" + path.resolve('src')
                }),
                include: [configWebpack.path.example],
            },
            {
              test: /\.scss/,
              loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
              test: /\.css/,
              loader: 'style-loader!css-loader?outputStyle=expanded'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "url-loader?limit=1000&name=img/[path]/[name].[ext]",
                ],
                // include: path.resolve(configWebpack.path.src)
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            renderer
                            /* your options here */
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules:['node_modules', configWebpack.path.src],
        extensions: [".js", ".jsx", ".es6", "css", "scss", "less", "png", "jpg", "jpeg", "ico"],
        alias: {}
    },
    plugins: [
        // remove previous build folder
        new Clean([path.join(configWebpack.path.example, "dev")], {root: path.resolve()}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    // devtool: "#inline-source-map",
};

utils.addPlugins(webpackConfig, HtmlResWebpackPlugin, {
    mode: "html",
    filename: "index.html",
    template: "example/index.html",
    // favicon: "src/favicon.ico",
    htmlMinify: null,
    entryLog: true,
    templateContent: function(tpl) {
        return tpl;
    }
});

module.exports = webpackConfig;
