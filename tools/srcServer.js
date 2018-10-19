import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();  // Create an instance of express
const compiler = webpack(config);   // Use the webpack config that is imported from the webpack.config.dev

/** Use the webpack-dev-middleware and pass in the compiled version
 * of the code. We want the info to be displayed on the console. Use the
 * publicPath that we defined in the webpack.config.dev file
 * Form more info: https://github.com/webpack/webpack-dev-middleware
 */
app.use(require('webpack-dev-middleware')(compiler, {   
  noInfo: false,
  publicPath: config.output.publicPath
}));

/**
 * For info to hot-middleware: https://github.com/webpack-contrib/webpack-hot-middleware
 */
app.use(require('webpack-hot-middleware')(compiler));

/**
 * Tell express which pages to serve. Since we have a single page app, we just hav
 * the index.html file that needs to be served. The * is a wildcard. This line literally 
 * means that "any requests you get, you return the index.html file"
 */
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

/**
 * Listen for port 3000.
 */
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});