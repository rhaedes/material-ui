import React, { Component } from 'react';
import Panel from './internal/Panel';
import PanelRow from './internal/PanelRow';
import PanelCell from './internal/PanelCell';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';

const data = [
    {
        category: 'Identification',
        label: 'Contact Acquisition',
        value: 0.3
    },
    {
        category: 'Lead Management Funnel',
        label: 'Close - Cancelled',
        value: 0.1
    },
    {
        category: 'Lead Management Funnel',
        label: 'Close - Lost',
        value: 0
    },
    {
        category: 'Lead Management Funnel',
        label: 'Close - Won',
        value: 0.8
    },
    {
        category: 'Lead Management Funnel',
        label: 'Marketing Lead',
        value: 0.4
    },
    {
        category: 'Lead Management Funnel',
        label: 'Opportunity',
        value: 0.2
    },
    {
        category: 'Lead Management Funnel',
        label: 'Sales Lead',
        value: 0.6
    },
    {
        category: 'Purchase',
        label: 'Product Purchase',
        value: 1
    }
]

class Page extends Component {
    render() {
        let previousCategory = '';
        
        return (
            <Panel header="Outcomes">
                {data.map((item, index) => {
                    let {
                        category,
                        label,
                        value
                    } = item;
                    
                    const isVisible = category !== previousCategory ? 'visible' : 'hidden';
                    const styles = {
                        divider: { marginTop: 0, marginBottom: 0 },
                        category: { fontWeight: 'bold', visibility: isVisible }
                    };
                    
                    previousCategory = category;
                    
                    return (
                        <div key={index}>
                            {index !== 0 &&
                                <Divider style={styles.divider} />
                            }
                            <PanelRow>
                                <PanelCell colClass="s3" style={styles.category}>{category}</PanelCell>
                                <PanelCell colClass="s6">{label}</PanelCell>
                                <PanelCell colClass="s3">
                                    <Slider value={value}></Slider>
                                </PanelCell>
                            </PanelRow>
                        </div>
                    );
                })}
            </Panel>
        );
    }
}

export default Page;