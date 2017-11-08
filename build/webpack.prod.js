const webpack = require('webpack')
const merge = require('webpack-merge')
const BundlePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const common = require('./webpack.base')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      comments: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new NyanProgressPlugin({
      debounceInterval: 60,
      nyanCatSays(progress, message) {
        if (progress === 1) {
          return '~maple~maple~~~done~'
        }
      }
    }),
    new BundlePlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      statsFilename: 'report.html',
      openAnalyzer: false
    })
  ]
})
