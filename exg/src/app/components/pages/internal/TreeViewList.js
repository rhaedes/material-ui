import React, { Component } from 'react';

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

export default TreeViewList