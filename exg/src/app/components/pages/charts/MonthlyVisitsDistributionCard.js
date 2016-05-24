import React, {Component} from 'react';
import NVD3Chart from 'react-nvd3'
import {Card, CardHeader} from 'material-ui/Card';


export default class MonthlyDistributionCard extends Component {
    static propTypes = {
        id: React.PropTypes.string,
        data: React.PropTypes.array,
        x: React.PropTypes.string,
        y: React.PropTypes.string,
    }

    static defaultProps = {
        id: 'MonthlyDistributionCard',
        data: {},
        x: 'x',
        y: 'y',
    }

    render() {

        const {
            id,
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
                <CardHeader title="Montly Visits Distribution" actAsExpander={false} showExpandableButton={false}/>
                <div style={cardContentStyle}>
                    <NVD3Chart
                        id={this.props.id + 'Chart'}
                        type="discreteBarChart"
                        datum={this.props.data}
                        x={this.props.x}
                        y={this.props.y}
                        width="800"
                        height="500"
                        legend={{ enabled: true }}
                        tooltip={{ enabled: true }}
                        />
                </div>
            </Card>
        );
    }
}




