NewQuote = React.createClass({
  componentDidMount(){
    
    Tracker.autorun(() => {
      FlowRouter.watchPathChange();
      if(FlowRouter.getRouteName() === 'Book'){
        this.refs.quote.focus();
      }
    });
  },
  newQuoteHandler(e){
    e.preventDefault();
  },
  render(){
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.newQuoteHandler}>
          <div className="row">
            <div className="input-field col s9">
              <textarea ref="quote" id="textarea1" className="materialize-textarea"></textarea>
              <label className="right-align" htmlFor="textarea1">New Quote</label>
            </div>
            <button className="input-field col s2 waves-effect waves-light btn" type="submit">
              <i className="large material-icons center">add</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
});
