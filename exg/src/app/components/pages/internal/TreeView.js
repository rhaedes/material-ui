import React, { Component } from 'react';
import CheckBox from 'material-ui/Checkbox';

const TreeViewList = (props) => {
    const {
        children
    } = props;
    
    const style = Object.assign({
        listStyleType: 'none',
        margin: 0
    }, props.listStyle);
    
    return (
        <ul style={style}>
            {children}
        </ul>
    );
}

const TreeViewListItem = (props) => {
    const {
        children,
        image,
        label,
        onSelect
    } = props;
    
    const styles = {
        image: { marginRight: 5 },
        label: {marginLeft: -11}
    };
    
    return (
        <li>
            <CheckBox onCheck={onSelect} labelStyle={styles.label} label={
                <div>
                    <img src={image} style={styles.image} />
                    <span>{label}</span>
                </div>
            } />
            
            {children}
        </li>
    );
}

class TreeView extends Component {
    constructor(props) {
        super(props);
        
        this.createTreeList = this.createTreeList.bind(this);
    }
    onSelect() {
        console.log(this);
        
    }
    createTreeList(item) {
        const {
            id,
            image,
            items,
            label
        } = item;
        
        //console.log(this.onSelect);
       
        if (items) {
            let children = items.map(this.createTreeList);
            
            return(
                <TreeViewListItem key={id} label={label} image={image} onSelect={this.onSelect.bind(this)}>
                    <TreeViewList style={this.props.listStyle}>
                        {children}
                    </TreeViewList>
                </TreeViewListItem>
            );
        } else {
            return(
                <TreeViewListItem key={id} label={label} image={image} onSelect={this.onSelect} />
            );
        }
    }
    render() {
        const {
            data,
            onSelect
        } = this.props;
        
        const style = { 
            marginTop: 15,
            paddingLeft: 0
        };
        
        console.log(this.onSelect);
        
        return (
            <TreeViewList listStyle={style}>
                { this.createTreeList(data) }
            </TreeViewList>
        );
    }
}

export default TreeView;