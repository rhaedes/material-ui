import {RaisedButton, LinearProgress, Card} from 'material-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {start, update} from '../../../../actions/Process_actions';

var currentTimeoutId;

const ProcessPanel = (props) => {
  if (currentTimeoutId) {
    clearTimeout(currentTimeoutId);
  }
    
  if (props.process.jobStatus === "Running") {
    currentTimeoutId = setTimeout(() => {
      props.update(props.process.progressId);    
    }, 1000);
  }
  
  return (
    <div>
      <div style={{ padding: '0 15px' }}>
        <h2 style={{ fontWeight: '600' }}>Process</h2>
      </div>
      <Card style={{ padding: '15px 25px', boxShadow: 'none' }}>
        <div className="row">
          <span className="col s10">Number of visits generated</span>
          <span className="col s2">{props.process.visits}</span>
        </div>
        <div className="row">
          <span className="col s10">Number of contacts generated</span>
          <span className="col s2">{props.process.contacts}</span>
        </div>
        <div className="row" style={{ padding: '15px' }}>
          <LinearProgress mode="determinate" value={Math.round(props.process.progress * 100)} />
        </div>
      </Card>
      <div style={{ padding: '15px 30px' }}>
        <RaisedButton primary={true} label="Start" fullWidth={true} onMouseDown={props.start}></RaisedButton>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    process: state.process
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ start, update }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessPanel); 