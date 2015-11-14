LeftPanel = React.createClass({
  render(){
    return (
      <div className="col s3 z-depth-4" style={{
        backgroundColor: 'rgba(96, 115, 222, 0.87)',
        height: '6000px'
      }}>
        <NewBook/>
        <ListBooks/>
      </div>
    );
  }
});
