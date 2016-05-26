import React, { Component } from 'react';
import CheckBox from 'material-ui/Checkbox';

const TreeViewListItem = (props) => {
    const {
        checked,
        children,
        image,
        label,
        onCheck
    } = props;
    
    const styles = {
        image: { marginRight: 5 },
        label: { marginLeft: -11 }
    };
    
    return (
        <li>
            <CheckBox onCheck={onCheck} checked={checked} labelStyle={styles.label} label={
                <div>
                    <img src={image} style={styles.image} />
                    <span>{label}</span>
                </div>
            } />
            
            {children}
        </li>
    );
}

export default TreeViewListItem