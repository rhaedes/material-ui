const PanelCell = (props) => {
  const styles = Object.assign({}, props.style)
  const className = 'col ' + (props.colClass ? props.colClass : '');
  
  return (
   <div style={styles} className={className}>{props.children}</div>
  );
}

export default PanelCell;