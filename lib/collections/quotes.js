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
  insert(){
    return true;
  },
  remove(){
    return true;
  },
  update(){
    return true;
  }
});
