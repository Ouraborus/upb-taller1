const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const config = {
  entry: ['./src/js/gallery/index.js', './src/js/movies/indexMovies.js', './src/sass/main.scss'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?sourceMap']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    }),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new HtmlWebpackPlugin({filename: 'gallery.html', template: './src/gallery.html'}),
    new HtmlWebpackPlugin({filename: 'movies.html', template: './src/movies.html'})
  ]
}

module.exports = config
