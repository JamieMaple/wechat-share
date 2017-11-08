const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const OpenBrowser = require('open')
const config = require('./webpack.dev')

const PORT = 8080

config.plugins.push(new FriendlyErrorsPlugin({
  compilationSuccessInfo: {
    messages: [`You application is running here http://localhost:${PORT}`],
    notes: ['Some additionnal notes to be displayed unpon successful compilation']
  },
  clearConsole: true
}))

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  contentBase: __dirname,
  compress: true,
  overlay: true,
  hot: true,
  open: true,
  quiet: true, // for friendly-errors
  historyApiFallback: true // for html5 history, usually for spa
})

server.listen(PORT, 'localhost',() => {
  console.log('> Starting server...')
  OpenBrowser(`http://localhost:${PORT}`)
})
