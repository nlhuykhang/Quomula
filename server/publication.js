Meteor.publishComposite('book/list', function(){
  return {
    find: function(){
      return Books.find();
    },
    // children: [
    //   {
    //     find: function(bookId){
    //       return Quotes.find({bookId: bookId});
    //     }
    //   }
    // ]
  };
});

Meteor.publish('quote/list', function(bookId){
  return Quotes.find({bookId});
});
