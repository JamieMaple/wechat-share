const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})
