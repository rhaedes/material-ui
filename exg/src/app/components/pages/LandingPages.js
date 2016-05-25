import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import Panel from './internal/Panel';
import TreeView from './internal/TreeView';

const data = {
    id: 1,
    image: '/images/icons/home.png',
    label: 'Test 1',
    items: [
        {
            id: 2,
            image: '/images/icons/folder.png',
            label: 'Test 2',
            items: [
                {
                    id: 3,
                    image: '/images/icons/cubes_blue.png',
                    label: 'Test 3'
                },
                {
                    id: 4,
                    image: '/images/icons/window_colors.png',
                    label: 'Test 4'
                }
            ]
        },
        {
            id: 5,
            image: '/images/icons/preferences.png',
            label: 'Test 5'
        },
        {
            id: 6,
            image: '/images/icons/workstation1.png',
            label: 'Test 6'
        }
    ]
};

class Page extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openDialog: true
        };
        
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.selectItems = this.selectItems.bind(this);
        //this.onSelect = this.onSelect.bind(this);
    }
    openDialog() {
        this.setState({ openDialog: true });
    }
    closeDialog() {
        this.setState({ openDialog: false });
    }
    selectItems(event) {
        
    }
    onSelect(event) {
        console.log(this);
    }
    render() {
        const title = "Add landing page";
        
        const styles = {
          buttons: {
              showDialog: { margin: 15 },
              ok: { marginRight: 15 }
          }  
        };
        
        const actions = [
            <RaisedButton onClick={this.selectItems} style={styles.buttons.ok} primary={true} label="Ok"></RaisedButton>,
            <RaisedButton onClick={this.closeDialog} label="Cancel"></RaisedButton>            
        ];
        
        return (
            <div>
                <Panel header={title}>
                    <RaisedButton style={styles.buttons.showDialog} label={title} onClick={this.openDialog} />
                    <Dialog actions={actions} modal={true} title={title} open={this.state.openDialog}>
                        <TreeView data={data} onSelect={this.onSelect}></TreeView>
                    </Dialog>
                </Panel>
                <Panel header="Landing pages"></Panel>
            </div>
        );
    }
}

export default Page;