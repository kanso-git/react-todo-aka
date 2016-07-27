var moment = require('moment');

var isObject = (a) => (!!a) && (a.constructor === Object)

module.exports = {
  setUserInfo:function(userInfo){
    console.log("UserInfoLocalStorge -  setUserInfo in localeStorage ");
    if(isObject(userInfo)){
        userInfo["updated"] = moment().unix();
        if(typeof localStorage!='undefined') {
          localStorage.setItem('userInfo',JSON.stringify(userInfo));
          return userInfo;
        }else{
           console.log("UserInfoLocalStorge - localStorage n'est pas supporté");
        }
    }else{
        console.log("UserInfoLocalStorge -  usersInfo parameter is not a valid array ");
    }
  },
  getUserInfo: function(){
      // Détection
      if(typeof localStorage!='undefined') {
            var stringUserInfo = localStorage.getItem('userInfo') ;
            var userInfo =  {};
            try{
               userInfo =JSON.parse(stringUserInfo);
            } catch(e){
              console.log("UserInfoLocalStorge -getUserInfo: error in the catch block ");
            }
            return isObject(userInfo) ? userInfo: {};
      }else {
       console.log("UserInfoLocalStorge -getUserInfo:localStorage n'est pas supporté");
     }

  }
}
