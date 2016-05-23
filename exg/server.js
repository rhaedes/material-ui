"use strict"; 
var webpack = require('webpack'); 
var WebpackDevServer = require('webpack-dev-server'); 
var config = require('./webpack-dev-server.config'); 

const PORT = process.env.PORT || 4000;

 // To enable hot reload
config.entry.unshift(
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server'  
  )


const front_server = new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  contentBase: 'src/www',
  devtool: 'eval',
  hot: true,
  // proxy: {
  //   "*" : "http://localhost:1234" // <- backend
  // },
});

front_server.listen(PORT, 'localhost');