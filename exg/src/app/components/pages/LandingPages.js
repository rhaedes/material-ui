import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import Panel from './internal/Panel';
import PanelRow from './internal/PanelRow';
import PanelCell from './internal/PanelCell';
import TreeView from './internal/TreeView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData, update, updateSlider } from '../../../actions/LandingPages_actions';

class Page extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openDialog: false,
            checkedItems: this.props.landingPages.added,
            id: 0,
            tempValue: 0
        };
        
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.selectItems = this.selectItems.bind(this);
        this.onChangeCheckedItems = this.onChangeCheckedItems.bind(this);
        
        if(!this.props.landingPages.treeview.id) {
            props.getData();
        };
    }
    deleteLandingPage(item) {
        const items = [...this.state.checkedItems];
        items.splice(items.indexOf(item), 1);
        
        this.setState({ checkedItems: items });
        this.props.update(items);
    }
    openDialog() {
        this.setState({ openDialog: true });
    }
    closeDialog() {
        this.setState({ openDialog: false });
    }
    selectItems() {
        this.props.update(this.state.checkedItems);
        this.closeDialog();
    }
    onChange(id, event, value) {
        this.setState({ id, tempValue: value });
    }
    
    onDragStop(id) {
        this.props.updateSlider(id, this.state.tempValue)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        const propsItem = nextProps.landingPages.added.find((landingPage) => {
            return landingPage.id === nextState.id;
        });
        
        return propsItem ? propsItem.value === nextState.tempValue : true;
    }    
    onChangeCheckedItems(checkedItems) {
        this.setState({ checkedItems });
    }
    render() {
        const title = "Add landing page";
        
        const styles = {
          buttons: {
              showDialog: { margin: 15 },
              ok: { marginRight: 15 }
          },
          divider: { marginTop: 0, marginBottom: 0 },
          text: { padding: 15 },
          cell: { marginTop: 10 },
          buttonCell: { textAlign: 'right' }
        };
        
        const actions = [
            <RaisedButton onClick={this.selectItems} style={styles.buttons.ok} primary={true} label="Ok"></RaisedButton>,
            <RaisedButton onClick={this.closeDialog} label="Cancel"></RaisedButton>            
        ];
        
        const landingPages = this.props.landingPages.added.map((item, index) => {
            return (
                <div key={item.id}>
                    {index !== 0 &&
                        <Divider style={styles.divider} />
                    }
                    <PanelRow>
                        <PanelCell colClass="s7" style={styles.cell}>{item.label}</PanelCell>
                        <PanelCell colClass="s3" style={styles.cell}><Slider value={item.sliderValue} onDragStop={this.onDragStop.bind(this, item.id)} onChange={this.onChange.bind(this, item.id)} /></PanelCell>
                        <PanelCell colClass="s2" style={styles.buttonCell}><RaisedButton label="Delete" onClick={this.deleteLandingPage.bind(this, item)} /></PanelCell>
                    </PanelRow>                    
                </div>
            );
        });
        
        return (
            <div>
                <Panel header={title}>
                    <RaisedButton style={styles.buttons.showDialog} label={title} onClick={this.openDialog} />
                    <Dialog actions={actions} modal={true} title={title} open={this.state.openDialog}>
                        <TreeView data={this.props.landingPages.treeview} onChangeCheckedItems={this.onChangeCheckedItems} checkedItems={this.state.checkedItems}></TreeView>
                    </Dialog>
                </Panel>
                <Panel header="Landing pages">
                    {!landingPages.length &&
                        <div style={styles.text}>You need to select atleast one landing page.</div>
                    }
                    {landingPages}
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = ({ landingPages }) => {
    return landingPages;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getData, update, updateSlider }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);