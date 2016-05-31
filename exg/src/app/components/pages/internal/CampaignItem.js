import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import PanelRow from './PanelRow.js';
import PanelCell from './PanelCell.js';

const CampaignItem = ({ name, onChange, showLargeSlider, value }) => {
    const nameColSize = (showLargeSlider ? 's6' : 's9');
    const sliderColSize = (showLargeSlider ? 's6' : 's3');
    
    return (
        <PanelRow>
            <PanelCell colClass={nameColSize}>{name}</PanelCell>
            <PanelCell colClass={sliderColSize}><Slider value={value} onChange={onChange} /></PanelCell>
        </PanelRow>
    );
}

export default CampaignItem;