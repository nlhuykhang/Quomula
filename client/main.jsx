if(Meteor.isClient){
  Meteor.startup(function(){
    DocHead.addLink({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
    });
    DocHead.addMeta({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    });
    DocHead.setTitle('Quomula');
  });
}
