ListQuotesProps = _.extend({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let bookId = FlowRouter.getParam('_id');
    let book = Books.findOne(bookId);
    let handle = Meteor.subscribe('quote/list', bookId);

    return {
      isReady: handle.ready(),
      quotes: Quotes.find({bookId}).fetch(),
      bookTitle: book ? book.title : ''
    };
  },
  renderQuote(quote){
    return <Quote key={quote._id} data={quote} />;
  },
  renderQuotes(){
    return this.data.quotes.map(this.renderQuote);
  },
  render(){
    // <ul className="collection with-header col s11 offset-s1">
    //   <li className="collection-header"><h4>First Names</h4></li>
    //   {this.data.isReady ? this.renderQuotes() : this.renderLoading()}
    // </ul>

    return (
      <div id="list-quotes" className="row">
        <div className="col s11 offset-s1" style={{backgroundColor: '#8A00B5'}}>
          <div>
            <h4 className="white-text">{this.data.bookTitle}</h4>
          </div>
          {this.data.isReady ? this.renderQuotes() : this.renderLoading()}
        </div>
      </div>
    );
  }
}, ComponentSkeleton);

ListQuotes = React.createClass(ListQuotesProps);
