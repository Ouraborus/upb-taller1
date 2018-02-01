const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const config = {
  entry: {'indexMovies.js': './src/js/movies/indexMovies.js',
    'indexGallery.js': './src/js/gallery/index.js',
    'indexFibo.js': './src/js/fibonacci/indexFibo.js',
    'landingLoad.js': './src/js/landingLoad.js'},
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]'
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
    new ExtractTextPlugin('styles.css'),
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    }),
    new HtmlWebpackPlugin({template: './src/index.html', chunks: ['landingLoad.js']}),
    new HtmlWebpackPlugin({filename: 'gallery.html', template: './src/gallery.html', chunks: ['indexGallery.js']}),
    new HtmlWebpackPlugin({filename: 'movies.html', template: './src/movies.html', chunks: ['indexMovies.js']}),
    new HtmlWebpackPlugin({filename: 'fibonacci.html', template: './src/fibonacci.html', chunks: ['indexFibo.js']}),
    new HtmlWebpackPlugin({filename: 'blog.html', template: './src/blog.html', chunks: ['']})
  ]
}

module.exports = config
