import React, { Component } from 'react';
import CampaignTraffic from './internal/CampaignTraffic';
import Campaigns from './internal/Campaigns';
import { getData, updateCampaigns, updateCampaignTraffic } from '../../../actions/Campaigns_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CampaignsPage extends Component {
    constructor(props) {
        super(props);
        
        if(!props.campaigns.dataLoaded) {
            props.getData();
        }
    }
    onSliderChange () {
        console.log(arguments);
    }
    render() {
        const {
            campaigns: {
                items,
                traffic
            }
        } = this.props;
        
        return (
            <div style={{marginTop: 15}}>
                <CampaignTraffic data={traffic} style={{ marginBottom: 20 }} onChange={this.onSliderChange} />
                <Campaigns data={items} />
            </div>
        );
    }
}

const mapStateToProps = ({ campaigns }) => {
    return {
        campaigns
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getData, updateCampaigns, updateCampaignTraffic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsPage);