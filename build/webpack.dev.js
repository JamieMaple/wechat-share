const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.base')

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './src',
    compress: true,
    historyApiFallback: true, // h5 history for spa
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})
