import React, { Component } from 'react';
import TreeViewList from './TreeViewList';
import TreeViewListItem from './TreeViewListItem';
import { Checkbox } from 'material-ui';

class TreeView extends Component {
    static propTypes = {
        checkedItems: React.PropTypes.array
    }
    
    static defaultProps = {
        checkedItems: []
    }
    
    constructor(props) {
        super(props);
        
        this.createTreeList = this.createTreeList.bind(this);
    }
    onCheck(item, checkbox, isChecked) {
        let { 
            checkedItems
        } = this.props;
         
        if(isChecked) {
            checkedItems = [item, ...checkedItems];
        }
        else {
            checkedItems = [...checkedItems];
            checkedItems.splice(checkedItems.indexOf(item), 1);
        }
        
        if(this.props.onChangeCheckedItems) {
            this.props.onChangeCheckedItems(checkedItems);
        }
    }
    createTreeList(item) {
        const {
            id,
            image,
            items,
            label
        } = item;
        
        const {
            checkedItems,
            listStyle
        } = this.props;
        
        const children = items ? items.map(this.createTreeList) : null;
        const isChecked = checkedItems.indexOf(item) !== -1;
        
        return (
            <TreeViewListItem key={id} label={label} image={image} checked={isChecked} onCheck={this.onCheck.bind(this, item)}>
                {children &&
                    <TreeViewList style={listStyle}>
                        {children}
                    </TreeViewList>
                }
            </TreeViewListItem>
        );
    }
    render() {
        const {
            data
        } = this.props;
        
        const style = { 
            marginTop: 15,
            paddingLeft: 0
        };

        return (
            <TreeViewList listStyle={style}>
                { this.createTreeList(data) }
            </TreeViewList>
        );
    }
}

export default TreeView;