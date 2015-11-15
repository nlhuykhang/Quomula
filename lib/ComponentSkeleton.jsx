ComponentSkeleton = {
  mutualProps: {
    isLoading: false
  },
  loadingUnmountHandler(){
    console.log('loading is unmounted');
    this.mutualProps.isLoading = false;
  },
  isLoading(){
    return this.mutualProps.isLoading;
  },
  renderLoading(){
    // Meteor.setTimeout(() => {
      if(this.mutualProps.isLoading){
        return;
      } else {
        this.mutualProps.isLoading = true;
        return <Loading unmountHandler={this.loadingUnmountHandler} isLoading={this.isLoading}/>;
      }
    // }, 100);
  }
};
