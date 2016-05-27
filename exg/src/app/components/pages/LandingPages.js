import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import Panel from './internal/Panel';
import PanelRow from './internal/PanelRow';
import PanelCell from './internal/PanelCell';
import TreeView from './internal/TreeView';

const data = {
    id: 1,
    image: '/images/icons/home.png',
    label: 'Test 1',
    sliderValue: 0.2,
    items: [
        {
            id: 2,
            image: '/images/icons/folder.png',
            label: 'Test 2',
            sliderValue: 0.1,
            items: [
                {
                    id: 3,
                    image: '/images/icons/cubes_blue.png',
                    label: 'Test 3',
                    sliderValue: 0.7,
                },
                {
                    id: 4,
                    image: '/images/icons/window_colors.png',
                    label: 'Test 4',
                    sliderValue: 0.4,
                }
            ]
        },
        {
            id: 5,
            image: '/images/icons/preferences.png',
            label: 'Test 5',
            sliderValue: 0.9,
        },
        {
            id: 6,
            image: '/images/icons/workstation1.png',
            label: 'Test 6',
            sliderValue: 0.5,
        }
    ]
};

class Page extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openDialog: false,
            checkedItems: [],
            landingPages: []
        };
        
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.selectItems = this.selectItems.bind(this);
        this.onChangeCheckedItems = this.onChangeCheckedItems.bind(this);
    }
    deleteLandingPage(item) {
        const items = [...this.state.checkedItems];
        items.splice(items.indexOf(item), 1);
        
        this.setState({
            checkedItems: items,
            landingPages: items
        });
    }
    openDialog() {
        this.setState({ openDialog: true });
    }
    closeDialog() {
        this.setState({ openDialog: false });
    }
    selectItems() {
        this.setState({ landingPages: [...this.state.checkedItems]});
        this.closeDialog();
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
        
        const landingPages = this.state.landingPages.map((item, index) => {
            return (
                <div key={item.id}>
                    {index !== 0 &&
                        <Divider style={styles.divider} />
                    }
                    <PanelRow>
                        <PanelCell colClass="s7" style={styles.cell}>{item.label}</PanelCell>
                        <PanelCell colClass="s3" style={styles.cell}><Slider value={item.sliderValue} /></PanelCell>
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
                        <TreeView data={data} onChangeCheckedItems={this.onChangeCheckedItems} checkedItems={this.state.checkedItems}></TreeView>
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

export default Page;