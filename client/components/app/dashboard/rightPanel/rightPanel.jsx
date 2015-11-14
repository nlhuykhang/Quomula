RightPanel = React.createClass({
  render(){
    return (
      <div id="right-panel" className="col s9 z-depth-1" style={{backgroundColor: '#c5cae9', height:'6000px'}}>
        <NewQuote/>
        <ListQuotes/>
      </div>
    );
  }
});
