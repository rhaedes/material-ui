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
  
  apiServer.get( '/api/dashboard/', function ( req, res ) {
          
      var visitsPerChannel = [
      {
        "label": "LandingPages",
        "value": 25
      },
      {
        "label": "RefURLs",
        "value": 15
      },
      {
        "label": "Search",
        "value": 42
      },
      {
        "label": "Campaigns",
        "value": 32
      },
      {
        "label": "Other",
        "value": 48
      }
    ];
    
    var monthlyDistribution = [{
      key: "Monthly Distribution",
      values: [
        {
          "label": "January",
          "value": 88
        },
        {
          "label": "February",
          "value": 75
        },
        {
          "label": "March",
          "value": 32
        },
        {
          "label": "April",
          "value": 44
        },
        {
          "label": "Maj",
          "value": 57
        },
        {
          "label": "June",
          "value": 61
        },
        {
          "label": "July",
          "value": 65
        },
        {
          "label": "August",
          "value": 72
        },
        {
          "label": "September",
          "value": 48
        },
        {
          "label": "October",
          "value": 36
        },
        {
          "label": "November",
          "value": 51
        },
        {
          "label": "December",
          "value": 88
        }
      ]
    }
    ];
    
    var output = {data: {}};    
    output.data.visitsPerChannel = visitsPerChannel;
    output.data.monthlyDistribution = monthlyDistribution;
    res.send( JSON.stringify( output ) );
  });


  apiServer.listen( PORT, 'localhost' );
}
