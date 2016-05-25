import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import PanelRow from '../../../components/pages/internal/PanelRow.js';
import PanelCell from '../../../components/pages/internal/PanelCell.js';

class CampaignItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = { sliderValue: props.value };
        
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(event, value) {
        this.setState({ sliderValue: value });
        
        console.log(this.state.sliderValue);
    }
    
    render() {
        let {
            name,
            showLargeSlider,
            value
        } = this.props;
        
        const nameColSize = (showLargeSlider ? 's6' : 's9');
        const sliderColSize = (showLargeSlider ? 's6' : 's3');
        
        return (
            <PanelRow>
                <PanelCell colClass={nameColSize}>{name}</PanelCell>
                <PanelCell colClass={sliderColSize}><Slider value={this.state.sliderValue} onChange={this.onChange} /></PanelCell>
            </PanelRow>
        );
    }    
}

export default CampaignItem;