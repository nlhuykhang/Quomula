Books = new Mongo.Collection('books');

var BookSchema = new SimpleSchema({
  title: {
    type: String
  }
});

Books.attachSchema(BookSchema);

Books.allow({
  insert: function(){
    return true;
  }
});
