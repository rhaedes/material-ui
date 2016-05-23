"use strict"; 
var webpack = require('webpack'); 
var WebpackDevServer = require('webpack-dev-server'); 
var config = require('./webpack-dev-server.config'); 

module.exports = (PORT) => {
  // To enable hot reload
  config.entry.unshift(
    `webpack-dev-server/client?http://localhost:${PORT}/`,
    'webpack/hot/dev-server'  
    )

  // You get a lot of warnings if you run the server from CMD opened from Code
  // This is because node is case sensitive and, windows is giving mixed results
  // when cmd is opened in all-lower-case like c:\some\path where the drive is actually
  // in uppercase like C:\some\path.
  // Opnening the cmd from explorer solves that issue. 
  const front_server = new WebpackDevServer(webpack(config), {
    stats: { colors: true },
    contentBase: 'src/www',
    devtool: 'eval',
    hot: true,
    proxy: {
       "/api/*" : `http://localhost:${PORT - 1}` // <- json-mock-server
    },
  });

  front_server.listen(PORT, 'localhost');
}
