Meteor.publish('book/list', function(){
  return Books.find();
});
