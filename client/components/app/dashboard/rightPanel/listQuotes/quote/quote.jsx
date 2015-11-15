Quote = React.createClass({
  // <li className="collection-item">
  //   <div>
  //     {this.props.data.content}
  //     <a href="#!" className="secondary-content">
  //       <i className="material-icons">send</i>
  //     </a>
  //   </div>
  // </li>
  mouseEnter(){
    this.refs.controlIcons.style.display = 'inline';
  },
  mouseLeave(){
    this.refs.controlIcons.style.display = 'none';
  },
  render() {
// style="bottom: 45px; right: 24px;"
// width: 20px;
//     height: 20px;
//     line-height: 20px;
    return (
      <div className="card-panel blue lighten-3"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <div ref="controlIcons" className=""
          style={{float: 'right', display: 'none', listStyleType: 'none'}}>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="tiny material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="tiny material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a className="btn-floating green">
                <i className="tiny material-icons">publish</i>
              </a>
            </li>
            <li>
              <a className="btn-floating blue">
                <i className="tiny material-icons">attach_file</i>
              </a>
            </li>
          </ul>
        </div>
        <span className="white-text">
          {this.props.data.content}
        </span>
      </div>
    );
  }
});
