var React = require('react');

var Constants = require('Constants');
var MatinPremiumAPI= require('MatinPremiumAPI');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var CardList = require('CardList');
var Uitils = require('Uitils');


var startingCards = [];

var Master = React.createClass({
  getDefaultProps: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  getInitialState:function(){
    return {
      cards:[],
      selectedMenuItem:'NA'
    }
  },

  handleToggle:function(flag,cardId){
      var {cards} = this.state;
      switch (flag) {
         case Constants.TOGGLE_LIKE:
            var newCards = Uitils.handleCardLike(cards,cardId);
            this.setState({cards :newCards});
            break;
         case Constants.TOGGLE_HISTORY:
            var newCards = Uitils.handleCardHistory(cards,cardId);
            this.setState({cards :newCards});
            break;
         case Constants.TOGGLE_FAVORITE:
            var newCards = Uitils.handleCardHFavorite(cards,cardId);
            this.setState({cards :newCards});
            break;
    }

  },
  getCardsPromise:function(){
        var promiseUserInfo =MatinPremiumAPI.getUserInfo();
        var that = this;

        this.setState({
          isLoading :true,
          errorMessage: undefined
         });

         promiseUserInfo.then(
           rUserInfo =>{
                return Uitils.handlePromiseUserInfo(rUserInfo);
            }).then( rStartingCards =>{
                that.setState({
                  cards:Uitils.handlePromiseStartingCards(rStartingCards)
                })
         }
    )
  },
  componentDidMount: function(){
   // load the cards when component
      this.getCardsPromise();
  },
  shouldComponentUpdate: function(nextProps, nextState) {

    // if(nextState.selectedMenuItem === 'NA' ){
    //   console.log("shouldComponentUpdate NA case - YES");
    //   return true;
    // }else if(nextState.selectedMenuItem){
    //    console.log("shouldComponentUpdate menu selection - YES");
    //    return nextState.selectedMenuItem!== this.state.selectedMenuItem;
    // }
    // return false ;
    return true;

  },
  componentWillReceiveProps: function(newProps){
     console.log("Master  componentWillReceiveProps ...")
      var menuSel =newProps.location.query.menuSel;
      this.setState({
          selectedMenuItem:menuSel
      })
      if(typeof menuSel ==='string' && menuSel.trim().length>0){
        console.log("Master  componentWillReceiveProps ... menuSel",menuSel);
        window.location.hash ='#/';
      }
    },
  render:function(){
    var {cards} = this.state;
    console.log("cards in Master ",cards)
    return(
      <div>
        <CardList onToggle={this.handleToggle} cards={cards} />
      </div>
    )
  }
});

module.exports = Master;
