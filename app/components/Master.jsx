var React = require('react');

var Constants = require('Constants');
var MatinPremiumAPI= require('MatinPremiumAPI');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var CardList = require('CardList');
var Utility = require('Utility');
var ErrorModal = require('ErrorModal');


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
  getCardsPromise:function(){
        var promiseUserInfo =MatinPremiumAPI.getUserInfo();
        var that = this;

        this.setState({
          cards:[],
          isLoading :true,
          errorMessage: undefined

         });

          var promiseStartingCards =  promiseUserInfo.then(rUserInfo =>{
                console.log("Master promiseUserInfo then",rUserInfo);
                return Utility.handlePromiseUserInfo(rUserInfo).
                then(function(_cards){
                 console.log("my _cards ",_cards);
                 var startingCards= Utility.handlePromiseStartingCards(_cards);
                 console.log("my startingCards ",startingCards);
                 that.setState({
                   cards:startingCards,
                   errorMessage:undefined,
                   isLoading:false
                 })
                });
            }).catch(function(error){
                    console.log("Master promiseUserInfo error",error);
                    that.setState({
                      cards:[],
                      errorMessage: error.message,
                      isLoading:false
                    })
            });

    console.log("Master promiseStartingCards the return Object ",promiseStartingCards);
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

    handleToggle: function(flag,cardId){

        var {cards} = this.state;
        switch (flag) {
          case Constants.TOGGLE_LIKE:
             var newCards = Utility.handleCardLike(cards,cardId);
             this.setState({cards :newCards});
          break;
         case Constants.TOGGLE_HISTORY:
            var newCards = Utility.handleCardHistory(cards,cardId);
            this.setState({cards :newCards});
          break;
         case Constants.TOGGLE_FAVORITE:
            var newCards = Utility.handleCardHFavorite(cards,cardId);
            this.setState({cards :newCards});
         break;
      }

    },
  render:function(){
        var {cards,isLoading,errorMessage} = this.state;
        var that = this;
        function renderMessage(){
            //debugger;
            if(isLoading){
              return <progress className="success text-center" max="100" value="75">Fecthing the Cards ...</progress>
            }else if(cards && cards.length>0){
              return  <CardList onToggle={that.handleToggle} cards={cards} />;
            }
          }
          function renderError(){
           //debugger;
           if(typeof errorMessage === 'string'){
             return (
               <ErrorModal message={errorMessage}/>
             )
           }
          }


    return(
      <div>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Master;
