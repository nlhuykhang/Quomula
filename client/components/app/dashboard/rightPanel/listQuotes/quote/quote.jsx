Quote = React.createClass({
  mouseEnter(){
    this.setState({
      isShowControlIcons: true
    });
  },
  mouseLeave(){
    this.setState({
      isShowControlIcons: false
    });
  },
  getInitialState(){
    return {
      isShowControlIcons: false,
      isShowEditForm: false
    };
  },
  clickEditHandler(){
    this.setState({
      isShowEditForm: true,
      isShowControlIcons: false
    });
  },
  clickDeleteHandler(){
    Quotes.remove(this.props.data._id);
  },
  updateQuoteHandler(e){
    e.preventDefault();
    Quotes.update(this.props.data._id, {
      $set: {
        content: this.refs.quote.value.trim()
      }
    }, (err) => {
      if(!err){
        this.setState({
          isShowEditForm: false
        });
      }
    });
  },
  renderContentWithLineBreak(content){
    var list = content.split(/\n/);
    return list.map(function(doc){
      return (
        <span key={Math.random()}>
          {doc}
          <br/>
        </span>
      );
    });
  },
  renderContentOrEditForm(){
    let content = this.props.data.content;
    if(this.state.isShowEditForm) {
      return (
        <form onSubmit={this.updateQuoteHandler}>
          <div className="input-field">
            <textarea defaultValue={content}
              ref="quote" id="textarea2" className="materialize-textarea validate"></textarea>
          </div>
          <button className="input-field waves-effect waves-light btn" type="submit">
            <i className="material-icons center">add</i>
          </button>
        </form>
      );
    } else {
      return (
        <div className="white-text" style={{textAlign: 'left'}}>
          {this.renderContentWithLineBreak(content)}
        </div>
      );
    }
  },
  render() {
    return (
      <div className="card-panel blue lighten-3"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        {this.renderContentOrEditForm()}
        <div id="quote-control-icons" className={this.state.isShowControlIcons && !this.state.isShowEditForm ? 'active' : ''}>
          <i onClick={this.clickEditHandler} className="material-icons">mode_edit</i>
          <i onClick={this.clickDeleteHandler} className="material-icons">delete</i>
        </div>
      </div>
    );
  }
});
