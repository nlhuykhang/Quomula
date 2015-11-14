NewQuote = React.createClass({
  newQuoteHandler(e){
    e.preventDefault();
  },
  render(){
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.newQuoteHandler}>
          <div className="row">
            <div className="input-field col s9">
              <textarea id="textarea1" className="materialize-textarea"></textarea>
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
