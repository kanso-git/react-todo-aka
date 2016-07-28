
var $ = require('jquery');
var moment = require('moment');

var Constants = require('Constants');
var MatinPremiumAPI = require('MatinPremiumAPI');
var UserInfoLocalStorge = require("UserInfoLocalStorge");


var userInfo ={};
var filter0Fn =  obj => obj[Object.keys(obj)[0]]== 0? true:false;
var filter1Fn =  obj => obj[Object.keys(obj)[0]]== 1? true:false;
var mapKeyFn  =  obj => Object.keys(obj)[0];
var userCategories=[];
var userCheckedCategories=[];
var userUncheckedCategories=[];
var userServices = [];
var userCheckedServices = [];
var userUncheckedServices = [];
var startingCards = [];


module.exports = {
  handlePromiseUserInfo :function(rUserInfo){
    console.log("Master - promiseUserInfo: then case userInfo before",rUserInfo);
    if(rUserInfo.data ){
       userInfo = rUserInfo.data ;
       // add a fresh copy
       console.log("Master - Save a fresh copy of the userInfo Object ");
       UserInfoLocalStorge.setUserInfo(JSON.parse(JSON.stringify(userInfo)));
    }else{
       console.log("Master - get the userInfo Object from the localStorage ");
       userInfo =rUserInfo;
    }
    console.log("Master - promiseUserInfo: then case userInfo after",userInfo);

     userCategories = userInfo.categories;
     console.log("userCategories", userCategories);

     userCheckedCategories = userInfo.categories
         .filter(filter1Fn)
         .map(mapKeyFn);

     console.log("userCheckedCategories", userCheckedCategories);
     userUncheckedCategories = userInfo.categories
         .filter(filter0Fn)
         .map(mapKeyFn);
     console.log("userUncheckedCategories", userUncheckedCategories);

     userServices = userInfo.Services;
     console.log("userServices", userServices);

     userCheckedServices = userInfo.Services
         .filter(filter1Fn)
         .map(mapKeyFn);

     console.log("userCheckedServices", userCheckedServices);

     userUncheckedServices = userInfo.Services
         .filter(filter0Fn)
         .map(mapKeyFn);
     console.log("userUncheckedServices", userUncheckedServices);
     console.log("promiseUserInfo  ", userInfo)
     return MatinPremiumAPI.getStartingCards();
  },
  handlePromiseStartingCards:function(rStartingCards){
    console.log("rStartingCards", rStartingCards);
    var cards =JSON.parse(JSON.stringify(rStartingCards))
    return  startingCards=cards.map(card => {
           var transient =[];
           if ((card.category).toLocaleLowerCase() == "Publicite".toLocaleLowerCase()) {
               transient["type"] = Constants.PUBLICITE;
           } else {
               var cardCategory = userCheckedCategories
                   .find(cat => {
                       if (cat.toLocaleLowerCase() === card.category.toLocaleLowerCase()) {
                           return cat;
                       }
                   }) || [];

               if (cardCategory.length > 0) {
                   transient["type"] = Constants.REDACTION;
               } else {
                   var cardService = userCheckedServices
                       .find(service => {
                           if (service.toLocaleLowerCase() === card.category.toLocaleLowerCase()) {
                               return service;
                           }
                       })|| [];

                      cardService.length > 0 ? transient["type"] = Constants.DIVERTISSEMENT : transient["type"] = Constants.UNKNOWN

               }

           }

           var cardDeleted = userInfo.deleteCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
               cardDeleted.length >0 ? transient["deleted"] = "true":transient["deleted"] = "false";

           var cardLiked = userInfo.likeCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
               cardLiked.length >0 ? transient["liked"] = true:transient["liked"] = false;

           var cardViewed = userInfo.historyCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
               cardViewed.length >0 ? transient["viewed"] = true:transient["viewed"] = false;

           var cardFavorited = userInfo.favoriteCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
               cardFavorited.length >0 ? transient["favorited"] = true:transient["favorited"] = false;

           card["transient"] = transient;
           return card;
       });

  },
  handleCardLike : function(cards,cardId){
    //Toggle like logic
    console.log('Case Toggle like logic');
    var userInfo  = UserInfoLocalStorge.getUserInfo();
    var likeCards = userInfo.likeCards;
    var searchCard = likeCards.find(id => id == cardId)
    var newLikeCards =[];
   console.log("likeCards Before ",likeCards);
    if(searchCard && searchCard.length >0){
       console.log("exist so remove it ",cardId);
       newLikeCards = likeCards.filter(id => {
         if(!(id == cardId)){
           return id;
         }
       });
    }else{
      likeCards.push(cardId.toString());
      newLikeCards =likeCards;
      console.log("doesn't exist so push it ");
    }
    userInfo.likeCards =newLikeCards;
    UserInfoLocalStorge.setUserInfo(userInfo);
    console.log("newLikeCards ",newLikeCards);
    //service part
    var newCards = cards.map(_card => {
       if(_card.id == cardId){
         _card.transient.liked = ! _card.transient.liked;
         if(_card.transient.liked == true ){
           _card.numberOfLike = parseInt(_card.numberOfLike)  +1
         }else{
            _card.numberOfLike = parseInt(_card.numberOfLike) -1
         }
         return _card;
       }
       return _card;
    });
    return newCards;
  },
  handleCardHistory : function(cards,cardId){
    //Toggle like logic
    console.log('Case Toggle like logic');
    var userInfo  = UserInfoLocalStorge.getUserInfo();
    var historyCards = userInfo.historyCards;
    var searchCard = historyCards.find(id => id == cardId)
    var newHistoryCards =[];
   console.log("historyCards Before ",historyCards);
    if(searchCard && searchCard.length >0){
       console.log("exist so remove it ",cardId);
       newHistoryCards = historyCards.filter(id => {
         if(!(id == cardId)){
           return id;
         }
       });
    }else{
      historyCards.push(cardId.toString());
      newHistoryCards =historyCards;
      console.log("doesn't exist so push it ");
    }
    userInfo.historyCards =newHistoryCards;
    UserInfoLocalStorge.setUserInfo(userInfo);
    console.log("newHistoryCards ",newHistoryCards);
    //service part
    var newCards = cards.map(_card => {
       if(_card.id == cardId){
         _card.transient.viewed = ! _card.transient.viewed;
         return _card;
       }
       return _card;
    });
    return newCards;
  },
  handleCardHFavorite : function(cards,cardId){
    //Toggle like logic
    console.log('Case Toggle like logic');
    var userInfo  = UserInfoLocalStorge.getUserInfo();
    var favoriteCards = userInfo.favoriteCards;
    var searchCard = favoriteCards.find(id => id == cardId)
    var newFavCards =[];
   console.log("favoriteCards Before ",favoriteCards);
    if(searchCard && searchCard.length >0){
       console.log("exist so remove it ",cardId);
       newFavCards = favoriteCards.filter(id => {
         if(!(id == cardId)){
           return id;
         }
       });
    }else{
      favoriteCards.push(cardId.toString());
      newFavCards =favoriteCards;
      console.log("doesn't exist so push it ");
    }
    userInfo.favoriteCards =newFavCards;
    UserInfoLocalStorge.setUserInfo(userInfo);
    console.log("newFavCards ",newFavCards);
    //service part
    var newCards = cards.map(_card => {
       if(_card.id == cardId){
         _card.transient.favorited = ! _card.transient.favorited;
         return _card;
       }
       return _card;
    });
    return newCards;
  }
}
