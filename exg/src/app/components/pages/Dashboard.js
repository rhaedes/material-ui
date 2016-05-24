import React, { Component } from 'react';
import NVD3Chart from 'react-nvd3'

class Page extends Component {
    render() {
        var visitsPerChannel = [
            {
              "label" : "LandingPages",
              "value" : 252
            }, 
            {
              "label" : "RefURLs",
              "value" : 15
            },
            {
              "label" : "Search",
              "value" : 42
            },
            {
              "label" : "Campaigns",
              "value" : 32
            },
            {
              "label" : "LandingPages",
              "value" : 28
            }                                
      ];
      
     
    var monthlyDistribution = [{
          key: "Monthly Distribution",
          values: [
            {
              "label" : "January" ,
              "value" : 88
            } ,
            {
              "label" : "February" ,
              "value" : 75
            } ,
            {
              "label" : "March" ,
              "value" : 32
            } ,
            {
              "label" : "April" ,
              "value" : 44
            } ,
            {
              "label" : "Maj" ,
              "value" : 57
            } ,
            {
              "label" : "June" ,
              "value" : 61
            } ,
            {
              "label" : "July" ,
              "value" : 65
            } ,
            {
              "label" : "August" ,
              "value" : 72
            },
            {
              "label" : "September" ,
              "value" : 48
            },
            {
              "label" : "October" ,
              "value" : 36
            },
            {
              "label" : "November" ,
              "value" : 51
            },
            {
              "label" : "December" ,
              "value" : 88
            }
          ]
        }
      ];
    
      
        return (
            <div>
            <NVD3Chart 
                id="barChart" 
                type="discreteBarChart" 
                datum={monthlyDistribution} 
                x="label" 
                y="value"  
                width="800"
                height="400"
             />
            
            <NVD3Chart
                id="pieChart"
                type="pieChart"
                datum={visitsPerChannel}
                width="500"
                height="500"                
                x="label"
                y="value"
                renderEnd={function(chart, e){console.log( chart.id(), e)}}
                renderStart={function(chart, e){console.log( chart.id(), e)}}
                ready={function(chart, e){console.log( chart.id(), e)}}
            />
        </div>
        );
    }
}

export default Page;