
ListBooksProps = _.extend({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let handle = Meteor.subscribe('book/list');
    return {
      isReady: handle.ready(),
      books: Books.find().fetch()
    };
  },
  renderBook(book){
    return <Book key={book._id} data={book}/>;
  },
  renderBooks(){
    return this.data.books.map(this.renderBook);
  },
  render(){
    return (
      <div id="list-books" className="row">
        <div className="collection with-header">
          <div className="collection-header">
            <h4>List Books</h4>
          </div>
          <div style={{textAlign: 'left'}}>
            {this.data.isReady ? this.renderBooks() : this.renderLoading()}
          </div>
        </div>
      </div>
    );
  }
}, ComponentSkeleton);

ListBooks = React.createClass(ListBooksProps);
