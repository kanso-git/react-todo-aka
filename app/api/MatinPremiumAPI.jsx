var axios = require('axios');
var $ = require('jquery');
var moment = require('moment');


var UserInfoLocalStorge = require("UserInfoLocalStorge");
var Environment = require('Environment');
var Constants = require('Constants');

const LMP_API_URL = Environment.BASE_URL;
const TIME_IN_MS =  Environment.SESSION_DURATION_USERINFO;

var startingCardsUrl = `${LMP_API_URL}getStartingCards/0`;
var userInfoUrl = `${LMP_API_URL}user/getUserInfos`;


var toggleLikeUrl = `${LMP_API_URL}user/toggleLike`;
var toggleFavoriteUrl = `${LMP_API_URL}user/toggleFavorite`;
var deleteCardUrl = `${LMP_API_URL}user/deleteCard`;
var removeCardFromHistoryUrl = `${LMP_API_URL}user/removeCardFromHistory`;

//TODO delete the headersObject
//  var headersObject ={'C1-User-ID': 665};
var headersObject ={};

module.exports = {

  /*
    Provide all the cards we need to display when we start the application
  */
  getStartingCards : function(){
    return   axios.get(startingCardsUrl)
      .then( res => res.data)
      .catch(error => error )
  },

  /*
      Provide all the infos relative to a specifc user:
      User name
      Favorite cards ids
      Delete cards ids
      Like Cards ids
      History Cards ids
      Categories (sometimes called “intérêts” or “Themes” in different documents)
      Services ( specific categories )
  */
  getUserInfo : function(){
    var userInfoPromise = new Promise(function(resolve,reject){
       console.log("MatinPremiumAPI - userInfoPromise: UserInfoLocalStorge.getUserInfo()", UserInfoLocalStorge.getUserInfo());
       if(!$.isEmptyObject(UserInfoLocalStorge.getUserInfo())){
        var elapsedTimeSinceLastSave = moment().unix() - UserInfoLocalStorge.getUserInfo().updated;
        console.log("MatinPremiumAPI - userInfoPromise: elapsedTimeSinceLastSave", elapsedTimeSinceLastSave);
        console.log("MatinPremiumAPI - userInfoPromise: TIME_IN_MS", TIME_IN_MS);
        elapsedTimeSinceLastSave < TIME_IN_MS ? resolve(UserInfoLocalStorge.getUserInfo()):resolve(axios({method: 'get', url: userInfoUrl,headers:headersObject}))
       }else{
         console.log("MatinPremiumAPI - userInfoPromise: else-case UserInfoLocalStorge.getUserInfo()", UserInfoLocalStorge.getUserInfo());
         resolve( axios.get(userInfoUrl));
       }
    });
    return userInfoPromise;
  },


 /*
  Used to get the cards* by their id(s)
  cards are :favorite, viewed, deleted
  Provide all the cards that we provided the ids separted by commas
  {cardid1,cardid2,cardid3….}
  */

  getCards: function(arrayOfCardIds) {
    var encodedParam = encodeURIComponent(arrayOfCardIds);
    var requestUrl = `${LMP_API_URL}getCards/${encodedParam}`;
    console.log("getCards -requestUrl "+requestUrl);
    return  axios.get(requestUrl)
      .then( res => res.data)
      .catch( error => error)
  },

  /*
   Used to get the cards that are flagged as Sujet Acutel.
  */
  getSujetActuelCards: function() {
    var requestUrl = `${LMP_API_URL}getCardsDiscovery/0`;
    console.log("getSujetActuelCards -requestUrl "+requestUrl);
    return  axios.get(requestUrl)
      .then( res => res.data)
      .catch( error => error)
  },

 /*
  the below service is used to perform toggleLike nd toggleFavorite
 */
  toggleCard:function(cardId,toggleFor){
    var toggleUrl ;
    toggleFor === Constants.TOGGLE_LIKE ? toggleUrl = toggleLikeUrl: toggleUrl=toggleFavoriteUrl
    return  axios({
        method: 'post',
        url: toggleUrl,
        data:{cardId},
        headers: headersObject
      }).then(function (response) {
          console.log("toggleCard ["+toggleFor+"] response:",response);
          return response.data;
        })
        .catch(function (error) {
          console.log(error.message);
          return error;
        });
  },

/*
 service is used to delete a card by it's ID
*/
  deleteCard:function(cardId){
    return  axios({
        method: 'post',
        url: deleteCardUrl,
        data:{cardId},
        headers: headersObject
      }).then(function (response) {
          console.log("deleteCard - response:",response);
          return response.data;
        })
        .catch(function (error) {
          console.log(error.message);
          return error;
        });

  },

  /*
   service is used to remove a card from the history
  */
 removeCardFromHistory:function(cardId){
    return  axios({
        method: 'post',
        url: removeCardFromHistoryUrl,
        data:{cardId},
        headers: headersObject
      }).then(function (response) {
          console.log("removeCardFromHistory -response:",response);
          return response.data;
        })
        .catch(function (error) {
          console.log(error.message);
          return error;
        });
  }

  // ,getUserInfoTest:function(){
  //     // Send a  request with hearde
  //     return  axios({
  //         method: 'get',
  //         url: 'http://dev.lematindusoir.ch/wp-json/user/getUserInfos',
  //         headers:{'C1-User-ID':665}
  //       }).then(function (response) {
  //           console.log(response);
  //           console.log(response.data);
  //           return response.data;
  //         })
  //         .catch(function (error) {
  //           console.log(error.message);
  //           return error;
  //         });
  //  }

  // getCards: function(param) {
  //   var encodedParam = encodeURIComponent(param);
  //   var requestUrl = `${LMP_API_URL}&q=${encodedParam}`;
  //   console.log("requestUrl "+requestUrl);
  //
  //   return axios.get(requestUrl).then(function(res) {
  //     if(res.data.cod && res.data.message){
  //       throw new Error(res.data.message);
  //     }else{
  //       //alert(JSON.stringify(res.data.main,null,5));
  //       return res.data.main.temp;
  //     }
  //   }, function(res){
  //    throw new Error(res.data.message);
  //   })
  // }

  // {
  //    "id": 657,
  //    "title": "Post avec tous les modules - non publique",
  //    "subtitle": null,
  //    "isLocked": false,
  //    "isDiscovery": true,
  //    "category": "economie",
  //    "published_date": "2016-06-30 09:08:44",
  //    "tag": "didier drogba",
  //    "withSameTag": 1,
  //    "numberOfLike": "2",
  //    "permalink": "http://premium-lematin.xyz/post-de-sport/",
  //    "card": {
  //       "image": "http://premium-lematin.xyz/wp-content/uploads/2016/06/2016-04-17.jpg",
  //       "text": "<p>dasdasdasdasd</p>\n",
  //       "buttonUrl": "",
  //       "buttonText": "",
  //       "options": {
  //          "shareOptions": 1,
  //          "swipeUp": 1,
  //          "swipeDown": 1,
  //          "navigation": 1,
  //          "doubleClick": 1,
  //          "history": 1
  //       }
  //    }
  // }
}
