var axios = require('axios');
var $ = require('jquery');
var moment = require('moment');


var UserInfoLocalStorge = require("UserInfoLocalStorge");
var Constants = require('Constants');

const LMP_API_URL = Constants.BASE_URL;
const TIME_IN_MS =Constants.SESSION_DURATION_USERINFO;

var cardstUrl = `${LMP_API_URL}getStartingCards/0`;
var userInfoUrl = `${LMP_API_URL}user/getUserInfos/0`;

module.exports = {

  getStartingCards : function(){
    return   axios.get(cardstUrl).then(
               res => res.data,
               error=> console.log('error getCards...')
             )
  },

  getUserInfo : function(){
    var userInfoPromise = new Promise(function(resolve,reject){
       console.log("MatinPremiumAPI - userInfoPromise: UserInfoLocalStorge.getUserInfo()", UserInfoLocalStorge.getUserInfo());
       if(!$.isEmptyObject(UserInfoLocalStorge.getUserInfo())){
        var elapsedTimeSinceLastSave = moment().unix() - UserInfoLocalStorge.getUserInfo().updated;
        console.log("MatinPremiumAPI - userInfoPromise: elapsedTimeSinceLastSave", elapsedTimeSinceLastSave);
        console.log("MatinPremiumAPI - userInfoPromise: TIME_IN_MS", TIME_IN_MS);
        elapsedTimeSinceLastSave < TIME_IN_MS ? resolve(UserInfoLocalStorge.getUserInfo()):resolve(axios.get(userInfoUrl))
       }else{
         console.log("MatinPremiumAPI - userInfoPromise: else-case UserInfoLocalStorge.getUserInfo()", UserInfoLocalStorge.getUserInfo());
         resolve( axios.get(userInfoUrl));
       }
    });
    return userInfoPromise;
  }


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
