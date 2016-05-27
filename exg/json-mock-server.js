"use strict";
var express = require( 'express' );
var fs = require( 'fs' );

module.exports = ( PORT ) => {
  const apiServer = express();

  apiServer.get( '/api/hello', function ( req, res ) {
    res.send( JSON.stringify( {
      "hello": "world",
      "data": [
        { "name": "hello" },
        { "name": "world" }
      ]
    }) );
  });

  apiServer.get( '/api/outcomes/', function ( req, res ) {
    res.send( JSON.stringify( [
      { id: 1, category: 'Identification', label: 'Contact Acquisition', value: 0.3 },
      { id: 2, category: 'Lead Management Funnel', label: 'Close - Cancelled', value: 0.1 },
      { id: 3, category: 'Lead Management Funnel', label: 'Close - Lost', value: 0 },
      { id: 4, category: 'Lead Management Funnel', label: 'Close - Won', value: 0.8 },
      { id: 5, category: 'Lead Management Funnel', label: 'Marketing Lead', value: 0.4 },
      { id: 6, category: 'Lead Management Funnel', label: 'Opportunity', value: 0.2 },
      { id: 6, category: 'Lead Management Funnel', label: 'Sales Lead', value: 0.6 },
      { id: 7, category: 'Purchase', label: 'Product Purchase', value: 1  }
    ] ) );
  });

  apiServer.listen( PORT, 'localhost' );
}
