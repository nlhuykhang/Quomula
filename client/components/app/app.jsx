App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {};
  },
  render(){
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <LeftPanel/>
            <RightPanel/>
          </div>
        </div>
      </div>

    );
  }
});
