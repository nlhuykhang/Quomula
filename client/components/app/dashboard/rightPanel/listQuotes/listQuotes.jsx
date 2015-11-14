ListQuotesProps = _.extend({
  mixins: [ReactMeteorData],
  getMeteorData(){
    // let handle = Meteor.subscribe('quote/list');

    return {
      // isReady: handle.ready(),
      quotes: Quotes.find().fetch()
    };
  },

  render(){
    return (
      <div>
        this is list quote component
      </div>
    );
  }
}, ComponentSkeleton);

ListQuotes = React.createClass(ListQuotesProps);
