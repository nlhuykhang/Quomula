ReactLayout.setRootProps({
  className: "ui middle aligned center aligned grid",
  style: "background-color: #9AB971"
});

FlowRouter.route('/', {
  name: 'Home',
  action(){

    ReactLayout.render(App);
  }
});

FlowRouter.route('/books/:_id', {
  name: 'Book',
  action(params){
    console.log(params);
    ReactLayout.render(App, {
    });
  }
});

FlowRouter.route('/login', {
  name: 'Login',
  action(){
    ReactLayout.render(App, {
      content: <Login/>
    });
  }
});

FlowRouter.route('/register', {
  name: 'Register',
  action(){
    ReactLayout.render(App, {
      content: <Register/>
    });
  }
});
