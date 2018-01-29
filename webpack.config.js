const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack'); //to access built-in plugins    
const path = require('path');

const config = {
  entry: ['./src/js/gallery/index.js','./src/js/movies/indexMovies.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:  [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader?sourceMap'
          ]
        })
      }

    ]
  },
  plugins:[    
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
]
};

module.exports = config;
