var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var utils = require('./utils')

var webpackConfig = merge(baseWebpackConfig, {
  devtool: '#source-map',
  output: {
    filename: 'js/vue-uno-card.js',
    chunkFilename: 'js/[id].[chunkhash].js',
    library: 'VueUno',
    libraryTarget: 'umd'
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: false, extract: true })
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: true,
      extract: false
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': "'production'"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})

module.exports = webpackConfig
