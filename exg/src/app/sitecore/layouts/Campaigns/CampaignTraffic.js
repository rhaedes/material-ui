import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import CampaignItem from './CampaignItem';

const CampaignTraffic = (props) => {
    return (
        <div style={props.style}>
            <Card>
                <CardHeader title="Campaign traffic" />
                <CardText>
                    <CampaignItem name="Campaign traffic" value={0.5} showLargeSlider="true" />
                </CardText>
            </Card>
        </div>  
    );
}

export default CampaignTraffic;