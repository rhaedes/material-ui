import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Panel from '../../../components/pages/internal/Panel.js';
import CampaignItem from './CampaignItem';

const CampaignTraffic = (props) => {
    return (
        <div style={props.style}>
            <Panel header="Campaign traffic">
                <CampaignItem name="Campaign traffic" value={0.5} showLargeSlider="true" />
            </Panel>
        </div>  
    );
}

export default CampaignTraffic;