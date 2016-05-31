import React, {Component} from 'react';
import NVD3Chart from 'react-nvd3'
import {Card, CardHeader} from 'material-ui/Card';


export default class VisitsPerChannelCard extends Component {
    static propTypes = {
        id: React.PropTypes.string,
        data: React.PropTypes.array,
        x: React.PropTypes.string,
        y: React.PropTypes.string,
    }

    static defaultProps = {
        id: 'VisitsPerChannelCard',
        data: {},
        x: 'x',
        y: 'y',
    }
    render() {
        const {
            data,
            x,
            y,
        } = this.props;

        const cardContentStyle = {
            minHeight: '30px',
            padding: '15px'
        };

        return (
            <Card >
                <CardHeader title="Visits Per Channel" actAsExpander={false} showExpandableButton={false}/>
                <div style={cardContentStyle}>
                    <NVD3Chart
                        id={this.props.id + 'Chart'}
                        type="pieChart"
                        datum={this.props.data}
                        width={500}
                        height={500}
                        x={this.props.x}
                        y={this.props.y}
                        tooltip={{ enabled: true }}
                        />
                </div>
            </Card>
        );
    }
}




