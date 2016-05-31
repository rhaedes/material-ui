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
  
  apiServer.get( '/api/landingpages/', function ( req, res ) {
    res.send( JSON.stringify( { id: 1, image: '/images/icons/home.png', label: 'Test 1', sliderValue: 0.2, items: [
          { id: 2, image: '/images/icons/folder.png', label: 'Test 2', sliderValue: 0.1, items: [
                  { id: 3, image: '/images/icons/cubes_blue.png', label: 'Test 3', sliderValue: 0.7 },
                  { id: 4, image: '/images/icons/window_colors.png', label: 'Test 4', sliderValue: 0.4 }
              ]
          },
          { id: 5, image: '/images/icons/preferences.png', label: 'Test 5', sliderValue: 0.9 },
          { id: 6, image: '/images/icons/workstation1.png', label: 'Test 6', sliderValue: 0.5 }
      ]
    } ));
  });

  apiServer.get( '/api/dashboard/', function ( req, res ) {
    var output = {
      data: {
        visitsPerChannel: [
          { "label": "LandingPages", "value": 25 },
          { "label": "RefURLs", "value": 15 },
          { "label": "Search", "value": 42 },
          { "label": "Campaigns", "value": 32 },
          { "label": "Other", "value": 48 }
        ],
        monthlyDistribution: [
          {
            key: "Monthly Distribution",
            values: [
              { "label": "January", "value": 88 },
              { "label": "February", "value": 75 },
              { "label": "March", "value": 32 },
              { "label": "April", "value": 44 },
              { "label": "Maj", "value": 57 },
              { "label": "June", "value": 61 },
              { "label": "July", "value": 65 },
              { "label": "August", "value": 72 },
              { "label": "September", "value": 48 },
              { "label": "October", "value": 36 },
              { "label": "November", "value": 51 },
              { "label": "December", "value": 88 }
            ]
          }
        ]
      }
    }

    res.send( JSON.stringify( output ) );
  });


  apiServer.listen( PORT, 'localhost' );
}
