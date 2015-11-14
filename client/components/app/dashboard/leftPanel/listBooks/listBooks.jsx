ListBooks = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let data = {
      books: []
    };
    let handle = Meteor.subscribe('book/list');
    if(handle.ready()){
      data.books = Books.find().fetch();
    }
    return data;
  },
  renderBook(book){
    return <Book key={book._id} data={book}/>;
  },
  render(){
    return (
      <div id="list-books" className="row">
        <div className="collection with-header">
          <div className="collection-header">
            <h4>List Books</h4>
          </div>
          <div style={{textAlign: 'left'}}>
            {this.data.books.map(this.renderBook)}
          </div>
        </div>
      </div>
    );
  }
});
