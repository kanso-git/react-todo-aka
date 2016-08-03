var React = require('react');
var ReactDOM = require('react-dom');

var $ = require('jquery');
var Constants = require('Constants');
var {Link, IndexLink} = require('react-router');


var Login = React.createClass({

getInitialState: function() {
  return {
    isMobile: Constants.IS_MOBILE.any()
  };
},
onLogin :function(e){
 e.preventDefault();
 var loginUserName = this.refs.loginUserName.value;
 var loginUserPassword = this.refs.loginUserPassword.value;

 if(typeof loginUserName ==='string'  && loginUserName.trim().length>0
       && typeof loginUserPassword ==='string'  && loginUserPassword.trim().length>0){
        this.refs.loginUserName.value ='';
        this.refs.loginUserPassword.value ='';

        //window.location.hash ='#/?city='+encodeURIComponent(city);
        //<p className="text-center"><a href="#">Forgot your password?</a></p>
  }
},

resizeLogin:function(){
  var vpw = $(window).width();
  var vph = $(window).height();

  $('.wrap-center').css({'height': vph + 'px'});

  if(vph <700){
      $('.login-div').css("height",  vph);
  }else{
      $('.login-div').css("margin-top",  vph/4);
  }
},

componentDidMount: function(){
   // load the cards when component did mount
    console.log("Login.jsx componentDidMount get called")
    this.resizeLogin();
},
render:function(){
  return (
       <div className="row ">
         <div className="medium-6 medium-centered large-4 large-centered columns login-div">
            <form>
               <div className="row column log-in-form">
                  <h4 className="text-center">Log in with your email account</h4>
                  <label>Email
                    <input type="text" placeholder="somebody@example.com"></input>
                  </label>
                  <label>Password
                    <input type="text" placeholder="Password"></input>
                  </label>
                  <input id="show-password" type="checkbox"></input>
                  <label htmlFor="show-password">Show password</label>
                  <p><a type="submit" className="button expanded">Log In</a></p>
                   <p className="text-center"><a href="#">Forgot your password?</a></p>
               </div>
            </form>
         </div>
       </div>
  );
}
});

module.exports = Login;
