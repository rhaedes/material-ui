import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Panel from '../../../components/pages/internal/Panel.js';
import CampaignItem from './CampaignItem';

const Campaigns = (props) => {
    const {
        campaigns
    } = props;
    
    const campaignItems = campaigns.map((campaign, index) => {
        return(
            <div key={'campaign-container-' + index}>
                <CampaignItem name={campaign.name} value={campaign.value} />
                {index !== campaigns.length - 1 &&
                    <Divider style={{ marginTop: 0, marginBottom: 0 }} />
                } 
            </div>
        );
    });
    
    return (
        <Panel header="Campaigns">
            {campaignItems}
        </Panel>
    );
}

export default Campaigns;