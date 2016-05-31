import React, { Component } from 'react';
import NVD3Chart from 'react-nvd3'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import VisitsPerChannelCard from './charts/VisitsPerChannelCard';
import MonthlyVisitsDistributionCard from './charts/MonthlyVisitsDistributionCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChartsData } from '../../../actions/Dashboard_actions';

class Page extends Component {
  constructor(props) {
        super(props);                        
        props.getChartsData();                       
  }
    
  render() {                  
    const spacingStyle = { marginTop: '15px' };
    
    return (
      <div>      
        <div style={spacingStyle}>
          <VisitsPerChannelCard 
            id='VisitsPerChannelCard'
            data={this.props.dashboard.data.visitsPerChannel}
            x='label'
            y='value'>
          </VisitsPerChannelCard>
        </div>
        <div style={spacingStyle}>
          <MonthlyVisitsDistributionCard 
            id='MonthlyDistributionCard'
            data={this.props.dashboard.data.monthlyDistribution}
            x='label'
            y='value'>
          </MonthlyVisitsDistributionCard>
        </div>
      </div>
    );     
  }
}

const mapStateToProps = ( { dashboard } ) => {
    return {
      dashboard
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getChartsData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
