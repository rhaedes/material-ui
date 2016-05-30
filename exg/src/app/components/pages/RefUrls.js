import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import { addRefUrl, delRefUrl, updateRefUrl } from '../../../actions/RefUrlsAction';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';


import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class AddRefUrlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  addRefUrlHandler() {
    const { onAddRefUrl } = this.props;

    if (this.state.inputValue) {
      onAddRefUrl(this.state.inputValue);
    }

    this.setState({
      inputValue: ''
    });
  }
  onInputValueChangeHandler(e, value) {
    this.setState({
      inputValue: value
    });
  }
  render() {
    return (<Card>
      <CardHeader title="Ref URL Input" actAsExpander={false} showExpandableButton={false}/>
      <div style={{
        padding: '15px'
      }} className="row">
        <div className="col s8">
          <TextField fullWidth={true} onChange={this.onInputValueChangeHandler.bind(this) } value={this.state.inputValue} hintText="eg: https://www.example.com?parameter=yes"></TextField>
        </div>
        <div className="col s4">
          <RaisedButton style={{ marginTop: '15px' }} onClick={this.addRefUrlHandler.bind(this) } label="Add Ref Url"></RaisedButton>
        </div>
      </div>
    </Card>);
  }
}

class RefUrlListComponentItem extends Component {
  constructor(props) {
    super(props);
  }
  onDeleteUrlHandler() {
    this.props.onDeleteUrl(this.props.urlRef.url);
  }

  handleSlider(e, value) {
    this.props.onUpdateUrl(this.props.urlRef.url, value);
  }
  render() {
    const {urlRef} = this.props;

    return (<div style={{ lineHeight: '66px', borderBottom: '1px solid #000' }} className="row">
      <div className="col s6">{urlRef.url}</div>
      <div className="col s4">
        <Slider
          defaultValue={0.5}
          style={{
            marginBottom: '24px'
          }}
          value={urlRef.value} onChange={this.handleSlider.bind(this) }
          />
      </div>
      <div style={{ textAlign: 'right' }} className="col s2">
        <RaisedButton onClick={this.onDeleteUrlHandler.bind(this) } label="Delete"></RaisedButton>
      </div>
    </div>);
  }
}

class RefUrlListComponent extends Component {
  render() {
    const { urls, onDeleteUrl, onUpdateUrl } = this.props;
    const cardContentStyle = {
      minHeight: '30px',
      padding: '15px'
    };

    return (<Card >
      <CardHeader title="Ref URL" actAsExpander={false} showExpandableButton={false}/>
      <div style={cardContentStyle}>
        {urls.map((urlRef, index) => {
          return (<RefUrlListComponentItem key={index} onUpdateUrl={onUpdateUrl} onDeleteUrl={onDeleteUrl} urlRef={urlRef}></RefUrlListComponentItem>)
        }) }
      </div>
    </Card>);
  }
}

class RefUrlsPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendering")
    const spacingStyle = { marginTop: '15px' };
    return (
      <div>
        <div style={spacingStyle}>
          <AddRefUrlComponent onAddRefUrl={this.props.addRefUrl}></AddRefUrlComponent>
        </div>
        <div style={spacingStyle}>
          <RefUrlListComponent onUpdateUrl={debounce(this.props.updateRefUrl, 200)} onDeleteUrl={this.props.delRefUrl} urls={this.props.refUrls.refUrls}></RefUrlListComponent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    refUrls: state.refUrls
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addRefUrl, delRefUrl, updateRefUrl }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RefUrlsPage);