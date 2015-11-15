Loading = React.createClass({
  componentWillMount() {
    let bodyEl = $('body');
    Meteor.setTimeout(() => {
      if(this.props.isLoading()){
        bodyEl.append(`
          <div class="lean-overlay" id="materialize-lean-overlay-8" style="z-index: 1002; display: block; opacity: 0.5;">
            <div class="preloader-wrapper big active" style = "z-index:1003;display:block;opacity: 1;top: 40%;left: 50%;" >
              <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left" >
                  <div class="circle"></div>
                </div>
                <div class="gap-patch" >
                  <div class="circle"></div>
                </div>
                <div class="circle-clipper right" >
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
          `
        );
      }
    }, 63);

  },
  componentWillUnmount() {
    this.props.unmountHandler();
    // Meteor.setTimeout(() => {
    $('.lean-overlay').remove();
    // }, 200);
  },
  render() {
    return (
      <div></div>
    );
  }
});
