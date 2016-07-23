var React = require('react');

var MatinPremiumAPI= require('MatinPremiumAPI');
var CardList = require('CardList');

var Master = React.createClass({
  getInitialState:function(){
    return {
      cards:MatinPremiumAPI.getCards()
    }
  },

  handleToggle:function(flag){
      switch (flag) {
       case 'like':
        //Toggle like logic
        console.log('Case Toggle like logic');
        break;
       case 'history':
        //Toggle history logic
        console.log('Case Toggle history logic');
       break;
       case 'favorite':
        //Toggle like favorite
        console.log('Case Toggle favorite logic');
       break;
    }
  },
  componentDidMount: function(){
   // load the cards when component
  },
  render:function(){
    var {cards} = this.state;
    return(
      <div>
        <CardList onToggle={this.handleToggle} cards={cards} />
      </div>
    )
  }
});

module.exports = Master;
