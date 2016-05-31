import React, { Component } from 'react';
import InternalSearchTermComponent from './internal/InternalSearchTermComponent';
import ExternalSearchTermComponent from './internal/ExternalSearchTermComponent';
import ExternalSearchChannels from './internal/ExternalSearchChannels';
import { connect } from 'react-redux';
import { updateInternalSearchTermComponent } from '../../../actions/Actions';
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateInternalSearchTermComponent }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);