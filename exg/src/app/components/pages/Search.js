import React, { Component } from 'react';
import InternalSearchTermComponent from './internal/InternalSearchTermComponent';
import ExternalSearchTermComponent from './internal/ExternalSearchTermComponent';
import ExternalSearchChannels from './internal/ExternalSearchChannels';

class Page extends Component {
    render() {
        return (
            <div>
                <InternalSearchTermComponent></InternalSearchTermComponent>
                <ExternalSearchTermComponent></ExternalSearchTermComponent>
                <ExternalSearchChannels></ExternalSearchChannels>
            </div>
        );
    }
}

export default Page;