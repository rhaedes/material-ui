import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Panel from './Panel.js';
import CampaignItem from './CampaignItem';

const CampaignTraffic = (props) => {
    return (
        <div style={props.style}>
            <Panel header={props.data.name}>
                <CampaignItem name={props.data.name} value={props.data.value} showLargeSlider="true" />
            </Panel>
        </div>  
    );
}

export default CampaignTraffic;