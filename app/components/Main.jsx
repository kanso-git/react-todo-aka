var React = require('react');
var $     = require('jquery');

var Nav                 = require('Nav');
var Footer              = require('Footer');
var LeftMenu            = require('nav-menu/LeftMenu');
var RightMenu           = require('nav-menu/RightMenu');
var Constants           = require('Constants');
var MatinPremiumAPI     = require('MatinPremiumAPI');
var LoginAPI            = require('LoginAPI');
var UserInfoLocalStorge = require('UserInfoLocalStorge');


var Main =  React.createClass({
  getUserInfo:function(){
     var promiseUserInfo = MatinPremiumAPI.getUserInfo();
     promiseUserInfo.then(function(rUserInfo){
       if(rUserInfo.data ){
          //add this fresh copy to localStorage
          console.info("Main.jsx :getUserInfo add this fresh copy to localStorage ")
          UserInfoLocalStorge.setUserInfo(JSON.parse(JSON.stringify(rUserInfo.data)));
        }else{
          // just re-user existing copy
          console.info("Main.jsx :getUserInfo we have a valid version of userInfo in our localStorage ")
        }
     }).catch(function(error){
       console.error(" Main.jsx :getUserInfo we have got an error while getting the userInfo:", error.message);
     })
  },
  checkIfValidGlobalSessionExist:function(){
     console.info("Main.jsx :checkIfValidGlobalSessionExist ");
      var checkGSPromise = LoginAPI.checkIfValidGlobalSessionExist();
      checkGSPromise.then(function(gs){
        console.log("Main.jsx :checkIfValidGlobalSessionExist GS:",gs);
      }).catch(function(error){
        console.error("Main.jsx :checkIfValidGlobalSessionExist GS:", error.message);
      })

  },
  componentDidMount: function(){
     // load the cards when component did mount
       console.info("Main.jsx :componentDidMount");
    
       var loggedIn = this.props.location.query.loggedIn;
       console.log("Main.jsx  componentDidMount ... loggedIn", loggedIn);

       var userInfo = UserInfoLocalStorge.getUserInfo();
       if ($.isEmptyObject(userInfo)){
          console.info("Main.jsx :componentDidMount userInfo is empty");
       }else{
         console.info("Main.jsx :componentDidMount userInfo exist");
         this.checkIfValidGlobalSessionExist();
       }
      //;this.getUserInfo();

  },

  componentWillReceiveProps: function(newProps) {
      console.log("Main.jsx  componentWillReceiveProps ...")
      var loggedIn = newProps.location.query.loggedIn;
      console.log("Main.jsx  componentWillReceiveProps ... loggedIn", loggedIn);
  },



  render:function() {
    var {props} = this;
    return (
    <div className="navcontainer">
        <Nav/>
        <div className="wrap-center">
            {props.children}
        </div>
        <Footer/>
    </div>

  );
}
});
module.exports = Main;
