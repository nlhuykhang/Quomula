NewBook = React.createClass({
  newBookHandler(e){
    e.preventDefault();
    Books.insert({
      title: this.refs.bookName.value.trim()
    }, function(err, _id){
      if(!err){
        FlowRouter.go('Book', {_id});
      }
    });
    this.refs.bookName.value = '';
    this.refs.bookName.blur();
  },
  render(){
    return (
      <div className="row new-book deep-orange">
        <form className="col s12" onSubmit={this.newBookHandler}>
          <div className="row">
            <div className="input-field col s12">
              <i className="tiny material-icons prefix">library_add</i>
              <input ref="bookName" id="icon_prefix" type="text" className="validate"/>
              <label htmlFor="icon_prefix">New Book</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
