Quotes = new Mongo.Collection('quotes');

var QuoteSchema = new SimpleSchema({
  content: {
    type: String
  },
  bookId: {
    type: String
  }
});

Quotes.attachSchema(QuoteSchema);

Quotes.allow({
  insert: function(){
    return true;
  }
});
