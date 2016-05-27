import React, { Component } from 'react';
import Panel from './internal/Panel.js';
import PanelRow from './internal/PanelRow.js';
import PanelCell from './internal/PanelCell.js';
import {Slider, Divider, TextField} from 'material-ui';

class Page extends Component {
    render() {
        return (
            <div>
                <Panel header="Overview">
                    <PanelRow>
                        <PanelCell colClass="s4">
                           
                            <TextField
                                floatingLabelText="Number of unique visitors"
                                value="100"
                                />
                            <TextField
                                floatingLabelText="Number of visits generated (approx.)"
                                value="500"
                                />
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    Bounce rate
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s12">
                                    Percentage identified visitors
                                </PanelCell>
                                <PanelCell colClass="s12">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                             <TextField
                                floatingLabelText="Pageviews per visit (avg)"
                                value="4"
                                />
                            <TextField
                                floatingLabelText="Time spent per page (avg)"
                                value="00:30"
                                />
                                
                        </PanelCell>
                        
                        
                        <PanelCell colClass="s4">
                        <div>Traffic distribution</div>
                        <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    micro
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    website
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                        <PanelCell colClass="s4">
                        <div>Location</div>
                        <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Europe, Middle East, Africa
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Asia Pacific
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                            <PanelRow style={{ padding: '15px 0' }}>
                                <PanelCell colClass="s3">
                                    Americas
                                </PanelCell>
                                <PanelCell colClass="s9">
                                    <Slider value={0}> </Slider>
                                </PanelCell>
                            </PanelRow>
                        </PanelCell>
                    </PanelRow>
                </Panel>
            </div>
        );
    }
}

export default Page;