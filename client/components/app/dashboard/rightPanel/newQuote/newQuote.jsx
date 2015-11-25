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
    Quotes.insert({
      content: this.refs.quote.value.trim(),
      bookId: FlowRouter.getParam('_id')
    }, (err, id)=> {
      if(!err){
        this.refs.quote.value = '';
        this.refs.quoteLabel.classList.remove('active');
      }
    });
  },
  render(){
    return (
      <div className="row">
        <form ref="quoteForm" className="col s12" onSubmit={this.newQuoteHandler}>
          <div className="col s11 offset-s1" style={{backgroundColor: 'rgba(80, 34, 255, 0.74)'}}>
            <div className="input-field col s9">
              <textarea cols="20" wrap="hard" 
                ref="quote" id="textarea1" className="materialize-textarea validate"></textarea>
              <label ref="quoteLabel" className="right-align" htmlFor="textarea1">New Quote</label>
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
