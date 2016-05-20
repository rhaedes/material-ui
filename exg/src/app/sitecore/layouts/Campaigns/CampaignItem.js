import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

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
        
        const nameClasses = 'col ' + (showLargeSlider ? 's6' : 's9');
        const sliderClasses = 'col ' + (showLargeSlider ? 's6' : 's3');
        
        return (
            <div className="row">
                <div className={nameClasses}>{name}</div>
                <div className={sliderClasses}>
                    <Slider value={this.state.sliderValue} onChange={this.onChange} />
                </div>
            </div>
        );
    }    
}

export default CampaignItem;