RightPanel = React.createClass({
  componentDidMount(){
    console.log('RightPanel mounted');
  },
  render(){
    return (
      <div id="right-panel" className="col s9 z-depth-1" style={{backgroundColor: '#75A2A5', height:'6000px'}}>
        <NewQuote/>
        <ListQuotes/>
      </div>
    );
  }
});
