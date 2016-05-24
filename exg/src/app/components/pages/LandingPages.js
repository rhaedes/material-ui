import React, { Component } from 'react';
import NVD3Chart from 'react-nvd3'

class Page extends Component {
    render() {
      
    
      
        return (
            <div>{window.location.hash}</div>
        );
    }
}

export default Page;