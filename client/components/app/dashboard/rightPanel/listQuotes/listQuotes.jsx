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
  getInitialState(){
    return {
      isEditHeader: false
    };
  },
  renderQuote(quote){
    return <Quote key={quote._id} data={quote} />;
  },
  renderQuotes(){
    return this.data.quotes.map(this.renderQuote);
  },
  clickEditBookTitleHandler(e){
    this.setState({
      isEditHeader: true
    });
  },
  editHeaderBlurHandler(e){
    e.preventDefault();
    Books.update({
      _id: FlowRouter.getParam('_id')
    }, {
      $set: {
        title: this.refs.update_header_input.value.trim()
      }
    });
    this.setState({
      isEditHeader: false
    });
  },
  onInputHandler(e){
    console.log('on input');
  },
  renderHeaderDiv(){
    if(this.state.isEditHeader){
      return (
        <form onSubmit={this.editHeaderBlurHandler}>
          <input defaultValue={this.data.bookTitle}
          style={{fontSize: '40px'}}
          onBlur={this.editHeaderBlurHandler}
          autoFocus={true}
          ref="update_header_input"/>
        </form>
      );
    } else {
      return <h4 onClick={this.clickEditBookTitleHandler}
        className="white-text">{this.data.bookTitle}</h4>;

    }
  },
  render(){
    return (
      <div id="list-quotes" className="row">
        <div className="col s11 offset-s1" style={{backgroundColor: '#8A00B5'}}>
          <div>
            {this.renderHeaderDiv()}
          </div>
          {this.data.isReady ? this.renderQuotes() : this.renderLoading()}
        </div>
      </div>
    );
  }
}, ComponentSkeleton);

ListQuotes = React.createClass(ListQuotesProps);
