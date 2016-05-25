const PanelRow = (props) => {
  const styles = Object.assign({padding: '15px'}, props.style)
  
  return (
    <div style={styles} className="row">{props.children}</div>
  );
}

export default PanelRow;