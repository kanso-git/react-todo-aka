var React = require('react');

var MatinPremiumAPI= require('MatinPremiumAPI');
var CardList = require('CardList');

var Master = React.createClass({
  getInitialState:function(){
    return {
      cards:MatinPremiumAPI.getCards()
    }
  },
  componentDidMount: function(){
   // load the cards when component
   //http://files.newsnetz.ch/bildlegende/234061/2809685_pic_970x641.jpg
  },
  render:function(){
    var {cards} = this.state;
    return(
      <div>
        <CardList cards={cards} />
      </div>
    )
  }
});

module.exports = Master;
