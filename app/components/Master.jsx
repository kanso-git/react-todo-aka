var React = require('react');

var Constants = require('Constants');
var MatinPremiumAPI= require('MatinPremiumAPI');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var CardList = require('CardList');
var Utility = require('Utility');
var ErrorModal = require('ErrorModal');
var Loading = require('Loading');

var Master = React.createClass({
  getDefaultProps: function() {
    return {
      isLoading: false,
      errorMessage: undefined,
      selectedMenuItem:undefined
    }
  },
  getInitialState:function(){
    return {
      cards:[],
      selectedMenuItem:this.props.selectedMenuItem
    }
  },
  getCardsPromise:function(){
    var promiseUserInfo = MatinPremiumAPI.getUserInfo();
    var that = this;

    this.setState({
        cards: [],
        isLoading: true,
        errorMessage: undefined
    });

    var promiseStartingCards = promiseUserInfo.then(rUserInfo => {
        return Utility.handlePromiseUserInfo(rUserInfo).
        then(function(rCards) {
            that.setState({
                cards: Utility.handlePromiseStartingCards(rCards),
                errorMessage: undefined,
                isLoading: false
            })
        });
    }).catch(function(error) {
        console.error("Master getCardsPromise error:", error);
        that.setState({
            cards: [],
            errorMessage: error.message,
            isLoading: false
        })
    });
  },
  componentDidMount: function(){
     // load the cards when component did mount
      console.log("Master.jsx componentDidMount get called")
      this.getCardsPromise();

      //test
      // var promiseUserInfotest = MatinPremiumAPI.getUserInfoTest();
      // promiseUserInfotest.then(function(info){
      //   console.log(" promiseUserInfotest",info);
      // }).catch(function(e){
      //   console.error('we got an error ',e);
      // })
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
  componentWillReceiveProps: function(newProps) {
      console.log("Master  componentWillReceiveProps ...")
      var menuSelection = newProps.location.query.menuSelection;
      console.log("Master  componentWillReceiveProps ... menuSelection", menuSelection);

      //getTheNewCards based on the menu selection
      if (typeof menuSelection === 'string' && menuSelection.trim().length > 0) {
          console.log("Master  componentWillReceiveProps ... menuSelection", menuSelection);

          if(menuSelection ==  Constants.HOME_TITLE){
            this.getCardsPromise();
          }else{
            //TODO delete the below parameter and send an object instead
            var switchParamTempUse = menuSelection == Constants.FAVORITE_LEFT_MENU ?1 :2;

            var promiseCardsPerMenu ;
            menuSelection ==  Constants.SUJET_ACTUEL_LEFT_MENU ? promiseCardsPerMenu = MatinPremiumAPI.getSujetActuelCards() : promiseCardsPerMenu =MatinPremiumAPI.getCards(switchParamTempUse);

            this.setState({
                cards: [],
                isLoading: true,
                errorMessage: undefined,
                selectedMenuItem: menuSelection
            });
            var that = this;
            promiseCardsPerMenu.then(menuCards => {
                    that.setState({
                        cards: Utility.handlePromiseStartingCards(menuCards),
                        errorMessage: undefined,
                        isLoading: false
                    })
            }).catch(function(error) {
                console.error("Master promiseCardsPerMenu error:", error);
                that.setState({
                    cards: [],
                    errorMessage: error.message,
                    isLoading: false
                })
            });
          }
      }
  },
  handleToggle: function(flag, cardId) {
      var {cards} = this.state;
      switch (flag) {
          case Constants.TOGGLE_LIKE:
              this.setState({
                  cards: Utility.handleCardLike(cards, cardId)
              });
              break;
          case Constants.TOGGLE_HISTORY:
              this.setState({
                  cards: Utility.handleCardHistory(cards, cardId)
              });
              break;
          case Constants.TOGGLE_FAVORITE:
              this.setState({
                  cards: Utility.handleCardFavorite(cards, cardId)
              });
              break;
      }
  },
  render:function(){
        var {cards,isLoading,errorMessage} = this.state;
        var that = this;

        function renderMessage(){
            if(isLoading){
               return <Loading />;
            }else if(cards && cards.length>0){
               return  <CardList onToggle={that.handleToggle} cards={cards} />;
            }
        }
       function renderError(){
           if(typeof errorMessage === 'string'){
             return (
               <ErrorModal message={errorMessage}/>
             )
           }
       }
    return(
      <div >
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Master;
