import {RaisedButton, LinearProgress, Card} from 'material-ui';

const ProcessPanel = (props) => {
  return (
    <div>
      <div style={{ padding: '0 15px' }}>
        <h2 style={{ fontWeight: '600' }}>Process</h2>
      </div>
      <Card style={{ padding: '15px 25px', boxShadow: 'none' }}>
        <div className="row">
          <span className="col s10">Number of visits generated</span>
          <span className="col s2">0</span>
        </div>
        <div className="row">
          <span className="col s10">Number of contacts generated</span>
          <span className="col s2">0</span>
        </div>
        <div className="row" style={{ padding: '15px' }}>
          <LinearProgress mode="determinate" value={props.progressValue} />
        </div>
      </Card>
      <div style={{ padding: '15px 30px' }}>
        <RaisedButton primary={true} label="Start" fullWidth={true} onMouseDown={props.onStart}></RaisedButton>
      </div>

    </div>
  );
}

export default ProcessPanel; 