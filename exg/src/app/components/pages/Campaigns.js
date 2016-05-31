import React, { Component } from 'react';
import CampaignTraffic from './internal/CampaignTraffic';
import Campaigns from './internal/Campaigns';
import { getData, updateCampaigns, updateCampaignTraffic } from '../../../actions/Campaigns_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';

class CampaignsPage extends Component {
    constructor(props) {
        super(props);
        
        if(!props.campaigns.dataLoaded) {
            props.getData();
        }
    }
    render() {
        const {
            campaigns: {
                items,
                traffic
            },
            updateCampaigns,
            updateCampaignTraffic
        } = this.props;
        
        return (
            <div style={{marginTop: 15}}>
                <CampaignTraffic data={traffic} style={{ marginBottom: 20 }} onChange={debounce(updateCampaignTraffic, 100)} />
                <Campaigns data={items} onChange={debounce(updateCampaigns, 100)} />
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