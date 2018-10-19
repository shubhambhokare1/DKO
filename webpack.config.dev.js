/**
 * Webpack is used to efficiently load your webpage. When there is a 
 * change to your component, webpack ensures that only that component
 * loads rather than the whole page. This config is to cater to a dev env
 */

import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,  // Shows the debugger messages
  devtool: 'inline-source-map', // Developer console tool
  noInfo: false,    // If false, then it shows all the files that have been bundled
  entry: [  
    'eventsource-polyfill', // necessary for hot reloading with IE. Read about polyfill
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')    // Determines where is the entry point for the project 
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src') // Where all the src code lies
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),   // Reloads modules without doing a page reload
    new webpack.NoErrorsPlugin()    // Suppress errors when reloading modules
  ],
  module: {
    loaders: [  // Types of files webpack needs to handle
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};