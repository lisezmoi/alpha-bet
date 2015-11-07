var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    app: './client/index.js',
  },
  output: {
    path: __dirname + '/public/dist',
    publicPath: '/dist/',
    filename: '[name].js',
  },
  resolve: {
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: function(path) {
          return !/node_modules|dist/.test(path)
        },
        loader: 'babel',
        query: { presets: ['es2015', 'react'] },
      },
      {
        test: /\.(?:jpg|png|svg)$/,
        loader: 'file?name=[path][name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],
}
