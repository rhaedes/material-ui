import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import CampaignItem from './CampaignItem';

const Campaigns = (props) => {
    const {
        campaigns
    } = props;
    
    const campaignItems = campaigns.map((campaign, index) => {
        return(
            <div key={'campaign-container-' + index}>
                <CampaignItem name={campaign.name} value={campaign.value} key={'campaign-item-' + index} />
                {index !== campaigns.length - 1 &&
                    <Divider key={'divider-' + index} />
                } 
            </div>
        );
    });
    
    return (
        <Card>
            <CardHeader title="Campaigns" />
            <CardText>
                {campaignItems}
            </CardText>
        </Card>  
    );
}

export default Campaigns;