const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const config = {
  entry: {'indexMovies.js':'./src/js/movies/indexMovies.js',
  'indexGallery.js':'./src/js/gallery/index.js'},
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
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new HtmlWebpackPlugin({filename: 'gallery.html', template: './src/gallery.html', chunks:['indexGallery.js']}),
    new HtmlWebpackPlugin({filename: 'movies.html', template: './src/movies.html', chunks:['indexMovies.js']})
  ]
}

module.exports = config
