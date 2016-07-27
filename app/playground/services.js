var axios = require('axios');
var $ = require('jquery');


var cardstUrl = "https://lmpapp-api.herokuapp.com/wp-json/getStartingCards/0";
var getCards = function(){
  return   axios.get(cardstUrl).then(
             res => res.data,
             error=> console.log('error getCards...')
           )
};



var userInfoUrl ="https://lmpapp-api.herokuapp.com/wp-json/user/getUserInfos/0";
var getUserInfo = function(){
  return   axios.get(userInfoUrl).then(
             res => res.data,
             error=> console.log('error getCards...')
           )
};


//NewPass2016

// get user info



 var userInfo =[];

 var filter0Fn =  obj => obj[Object.keys(obj)[0]]== 0? true:false;
 var filter1Fn =  obj => obj[Object.keys(obj)[0]]== 1? true:false;
 var mapKeyFn  =  obj => Object.keys(obj)[0];


 var userCategories=[];
 var userCheckedCategories=[];
 var userUncheckedCategories=[];

 var userServices = [];
 var userCheckedServices = [];
 var userUncheckedServices = [];


console.log("aaaa");
myCatString="sports";
userInfo = JSON.parse(JSON.stringify(require(__dirname+'/userInfo.json')));

hadleToggelCategory: function(categoryName){

  var myCategories = UserInfoLocalStorge.getUserInfo().categories.map((cat)=> {
        if(Object.keys(cat)[0] === myCatString){
            cat[Object.keys(cat)[0]]=!cat[Object.keys(cat)[0]];
            return cat
        }
  return cat;
  })

  console.log("myCategories",myCategories);
  var updatedUserInfo = UserInfoLocalStorge.getUserInfo().categories =myCategories
  UserInfoLocalStorge.updateUserInfos(updatedUserInfo);


}

// var Constants = require('Constants');
// const TIME_IN_MS =Constants.GET_SESSION_DURATION_USERINFO();
// var elapsedTimeInMS = moment().unix() - userInfo.get("updated");
//
// var elapsedTimeInMS = moment().unix() - userInfo.get("updated");
//
// if(TIME_IN_MS < elapsedTimeInMS){
//   //not valid object
//   removeUserInfos();
//
//   console.log("UserInfoLocalStorge -  not valid object ");
//    getUserInfoFromRemoteServer().then(function(uf){
//       userInfo = that.setUserInfo(JSON.parse(JSON.stringify(uf)));
//       console.log("UserInfoLocalStorge -  getUserInfo is ",userInfo);
//    }, function(e){
//      console.log(e);
//    })
// }



// getUserInfo().then(function(userInfo){
//
//   userInfo = JSON.parse(JSON.stringify(require(__dirname+'/userInfo.json')));
//   console.log("userInfo JSON form File", userInfo);
//   userCategories = userInfo.categories;
//   console.log("userCategories", userCategories);
//
//   userCheckedCategories = userInfo.categories
//       .filter(filter1Fn)
//       .map(mapKeyFn);
//
//   console.log("userCheckedCategories", userCheckedCategories);
//   userUncheckedCategories = userInfo.categories
//       .filter(filter0Fn)
//       .map(mapKeyFn);
//   console.log("userUncheckedCategories", userUncheckedCategories);
//
//   userServices = userInfo.Services;
//   console.log("userServices", userServices);
//
//   userCheckedServices = userInfo.Services
//       .filter(filter1Fn)
//       .map(mapKeyFn);
//
//   console.log("userCheckedServices", userCheckedServices);
//
//   userUncheckedServices = userInfo.Services
//       .filter(filter0Fn)
//       .map(mapKeyFn);
//   console.log("userUncheckedServices", userUncheckedServices);
//
//    getCards().then(function(c){
//
//     var cards =JSON.parse(JSON.stringify(c))
//
//      startingCards = cards.map(card => {
//          var transient =[];
//          if ((card.category).toLocaleLowerCase() == "Publicite".toLocaleLowerCase()) {
//              transient["type"] = "P";
//          } else {
//              var cardCategory = userCheckedCategories
//                  .find(cat => {
//                      if (cat.toLocaleLowerCase() === card.category.toLocaleLowerCase()) {
//                          return cat;
//                      }
//                  }) || [];
//
//              if (cardCategory.length > 0) {
//                  transient["type"] = "R";
//              } else {
//                  var cardService = userCheckedServices
//                      .find(service => {
//                          if (service.toLocaleLowerCase() === card.category.toLocaleLowerCase()) {
//                              return service;
//                          }
//                      })|| [];
//
//                     cardService.length > 0 ?  transient["type"] = "S" : transient["type"] = "U"
//
//              }
//
//          }
//
//          var cardDeleted = userInfo.deleteCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
//              cardDeleted.length >0 ? transient["deleted"] = "true":transient["deleted"] = "false";
//
//          var cardLiked = userInfo.likeCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
//              cardLiked.length >0 ? transient["liked"] = true:transient["liked"] = false;
//
//          var cardViewed = userInfo.historyCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
//              cardViewed.length >0 ? transient["viewed"] = true:transient["viewed"] = false;
//
//          var cardFavorited = userInfo.favoriteCards.find(id => {if (parseInt(id) == card.id) {return id;}}) || [];
//              cardFavorited.length >0 ? transient["favorited"] = true:transient["favorited"] = false;
//
//          card["transient"] = transient;
//          return card;
//      });
//   //console.log(startingCards)
//
//
//   },function(error){
//     console.log("error getStartingCards")
//   })
//
//
// }, function(error){
//   console.log("error")
// })
