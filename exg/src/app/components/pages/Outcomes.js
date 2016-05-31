import React, { Component } from 'react';
import Panel from './internal/Panel';
import PanelRow from './internal/PanelRow';
import PanelCell from './internal/PanelCell';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update, getData } from '../../../actions/Outcomes_actions';

class Page extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 0,
            tempValue: 0
        };
        
        props.getData();
    }
    
    onChange(id, event, value) {
        this.setState({ id, tempValue: value });
    }
    
    onDragStop(id) {
        this.props.update(id, this.state.tempValue)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        const propsItem = nextProps.outcomes.find((outcome) => {
            return outcome.id === nextState.id;
        });
        
        return propsItem ? propsItem.value === nextState.tempValue : true;
    }
  
    render() {
        let previousCategory = '';
        
        return (
            <Panel header="Outcomes">
                {this.props.outcomes.map((outcome, index) => {
                    let {
                        category,
                        id,
                        label,
                        value
                    } = outcome;
                    
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
                                    <Slider value={value} onDragStop={this.onDragStop.bind(this, id)} onChange={this.onChange.bind(this, id)}></Slider>
                                </PanelCell>
                            </PanelRow>
                        </div>
                    );
                })}
            </Panel>
        );
    }
}

const mapStateToProps = ({outcomes}) => {
    return outcomes;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ update, getData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);