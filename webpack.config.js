/**
 *
 * @author key/jimberton.wang@gmail.com 17/4/10 19:53
 * @description
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();
let output =  {
  path: path.resolve(__dirname, 'assets'),
  filename: '[name].bundle.js',
  chunkFilename: '[id].bundle.js',
  publicPath: '/'
};
let plugins = [
  new webpack.optimize.CommonsChunkPlugin('common'),
  new HtmlWebpackPlugin({
    title: 'datahunter React 组件库API文档',
    description: '',
    username: 'jimberton',
    filename: 'index.html',
    inject: 'body',
    template: './example/index.ejs',
    hash: false
  })
]
if (process.env.NODE_ENV === 'production') {
  output = {
    path: path.resolve(__dirname, 'assets'),
    filename: '[hash].[name].bundle.js',
    chunkFilename: '[hash].[id].bundle.js'
  };
  plugins = plugins.concat(plugins, [
    new webpack.DefinePlugin({
       'process.env': {
         NODE_ENV: '"production"'
       }
     }),
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     })
  ])
}
module.exports = {
  entry: {
    index: './example/entry.js'
  },
  output,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader/useable', 'css-loader', 'postcss-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },  {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        use: ['file-loader']
      }, {
          test: /\.md$/,
          use: [{
              loader: "html-loader"
            }, {
              loader: "markdown-loader",
              options: {
                  pedantic: true,
                   renderer
                  /* your options here */
              }
            }
          ]
       }
    ]
  },
  resolve: {
    extensions:['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname),
      path.resolve(__dirname, 'example', 'utils', 'lib')
    ]
  },
  plugins
};
