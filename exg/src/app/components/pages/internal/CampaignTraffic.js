import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Panel from './Panel.js';
import CampaignItem from './CampaignItem';

const CampaignTraffic = ({ data, onChange, style }) => {
    return (
        <div style={style}>
            <Panel header={data.name}>
                <CampaignItem name={data.name} value={data.value} onChange={onChange} showLargeSlider="true" />
            </Panel>
        </div>  
    );
}

export default CampaignTraffic;