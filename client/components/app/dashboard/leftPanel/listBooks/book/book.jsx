Book = React.createClass({
  isFocus(){
    if(FlowRouter.getParam('_id') === this.props.data._id){
      return true;
    }
    return false;
  },
  getPath(){
    return FlowRouter.path('Book', {
      _id: this.props.data._id
    });
  },
  render(){
    return (
      <a href={this.getPath()}
        className={"collection-item book-item " + (this.isFocus() ? 'active': '')}>
        {this.props.data.title}
      </a>
    );
  }
});
