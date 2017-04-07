/**
 *
 * @author keyy/1501718947@qq.com 17/3/8 19:53
 * @description
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();
// marked.setOptions({
//   highlight: function (code, lang, callback) {
//     require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result);
//     });
//   }
// });
module.exports = {
  entry: {
    index: './example/entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: '/'
  },
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new HtmlWebpackPlugin({
      title: 'datahuner-component API',
      description: '',
      username: 'wangjingbo',
      filename: 'index.html',
      inject: 'body',
      template: './example/index.html_vm',
      hash: false
    })
  ]
};
