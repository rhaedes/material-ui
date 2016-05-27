import React, { Component } from 'react';
import NVD3Chart from 'react-nvd3'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import VisitsPerChannelCard from './charts/VisitsPerChannelCard';
import MonthlyVisitsDistributionCard from './charts/MonthlyVisitsDistributionCard';

class Page extends Component {
  render() {
    
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
    
    const spacingStyle = { marginTop: '15px' };
    return (
      <div>      
        <div style={spacingStyle}>
          <VisitsPerChannelCard 
            id='VisitsPerChannelCard'
            data={visitsPerChannel}
            x='label'
            y='value'>
          </VisitsPerChannelCard>
        </div>
        <div style={spacingStyle}>
          <MonthlyVisitsDistributionCard 
            id='MonthlyDistributionCard'
            data={monthlyDistribution}
            x='label'
            y='value'>
          </MonthlyVisitsDistributionCard>
        </div>
      </div>
    );
  }
}


export default Page;