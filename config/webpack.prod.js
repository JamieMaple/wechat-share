const webpack = require('webpack')
const merge = require('webpack-merge')
const BundlePlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common')

const { analyzer } = require('./commonConfig')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new BundlePlugin({
      analyzerMode: analyzer ? 'static' : 'disabled',
      generateStatsFile: true,
      statsFilename: 'report.html',
      openAnalyzer: false
    })
  ]
})
