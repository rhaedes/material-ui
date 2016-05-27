import {Card, CardHeader} from 'material-ui/Card';

const Panel = (props) => {
  const styles = Object.assign({}, {
    marginTop: '15px',
  }, props.style);
  
  return (
    <Card style={styles}>
      <CardHeader title={props.header} />
        {props.children}
    </Card>
  );
}

export default Panel;