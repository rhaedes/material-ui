import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class ExternalSearchChannels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trafficFromSearch: 0.5,
            organicGoogle: 0.5,
            organicYahoo: 0.5,
            organicBing: 0.5,
            organicLycos: 0.5,
            organicBaidu: 0.5,
            ppcGoogle: 0.5,
            ppcYahoo: 0.5,
            ppcBing: 0.5
        };
    }

    onChangeTrafficFromSearchHandler(e, value) {
        this.setState({
            trafficFromSearch: value
        });
    }
    
    onChangeSearchHandler(categoryName, name, e, value) {
        let newValue = {};
        
        newValue[categoryName + name] = value;
        
        this.setState(newValue);
    }
  
    render() {
      const spacingStyle = {marginTop:'15px'};
      const cardContentStyle = {
          minHeight: '30px',
          padding: '15px',
        };

      const valueRowStyle = {
          margin: '15px 0',
        };

      return (<div>
            <div style={spacingStyle}>
                <Card >
                    <CardHeader title="External Search Channels" actAsExpander={false} showExpandableButton={false} />
                    <div style={cardContentStyle}>
                        <div style={{padding:'15px', borderBottom:'1px solid #333'}}>
                            <div className="row">
                                <div className="col s6">
                                    Percentage of traffic coming from search:
                                </div>
                                <div className="col s6">
                                    <Slider value={this.state.trafficFromSearch} onChange={this.onChangeTrafficFromSearchHandler.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div style={{padding:'15px'}}>
                            <div className="row">
                                <div className="col s6">
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s12">
                                            <strong>Organic</strong>
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Google
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.organicGoogle} onChange={this.onChangeSearchHandler.bind(this, "organic", "Google")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Yahoo
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.organicYahoo} onChange={this.onChangeSearchHandler.bind(this, "organic", "Yahoo")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Bing
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.organicBing} onChange={this.onChangeSearchHandler.bind(this, "organic", "Bind")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Lycos
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.organicLycos} onChange={this.onChangeSearchHandler.bind(this, "organic", "Lycos")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Baidu
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.organicBaidu} onChange={this.onChangeSearchHandler.bind(this, "organic", "Baidu")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s12">
                                            <strong>PPC</strong>
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Google
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.ppcGoogle} onChange={this.onChangeSearchHandler.bind(this, "ppc", "Google")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Yahoo
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.ppcYahoo} onChange={this.onChangeSearchHandler.bind(this, "ppc", "Yahoo")} />
                                        </div>
                                    </div>
                                    <div style={valueRowStyle} className="row">
                                        <div className="col s6">
                                            Bing
                                        </div>
                                        <div className="col s6">
                                            <Slider value={this.state.ppcBing} onChange={this.onChangeSearchHandler.bind(this, "ppc", "Bing")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>);
    }
}
