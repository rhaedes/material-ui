import React, { Component } from 'react';
import CheckBox from 'material-ui/Checkbox';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';

const TreeViewListItem = (props) => {
    const {
        isOpen,
        checked,
        children,
        image,
        label,
        onCheck,
        onChevronClick
    } = props;
    
    const styles = {
        image: { marginRight: 5 },
        label: { marginLeft: -11 },
        chevron: { height: 20, width: 20, marginLeft: -20 },
        listItem: { display: 'flex' },
        checkboxContainer: { grow: 1, whiteSpace: 'nowrap' }
    };
    
    const arrow = isOpen === true ? <ExpandMore /> : <ChevronRight />;
    
    return (
        <li style={styles.listItem}>
            {children &&
                <div style={styles.chevron} onClick={onChevronClick.bind()}>{arrow}</div>
            }
            <div style={styles.checkboxContainer}>
                <CheckBox onCheck={onCheck} checked={checked} labelStyle={styles.label} label={
                    <div>
                        <img src={image} style={styles.image} />
                        <span>{label}</span>
                    </div>
                } />

                {isOpen && children}
            </div>
        </li>
    );
}

export default TreeViewListItem;