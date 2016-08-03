var axios = require('axios');
var $ = require('jquery');
var moment = require('moment');


var UserInfoLocalStorge = require("UserInfoLocalStorge");
var Constants = require('Constants');
var Environment = require('Environment');

const LOGIN_API_URL = Environment.LOGIN_BASE_URL;


var loginTicketCreationUrl   = `${LOGIN_API_URL}loginticket`;
var loginRequestSessionUrl   = `${LOGIN_API_URL}session`;

// Global Session

//1. validate
var globalSessionValidationUrl  = `${LOGIN_API_URL}validate_global_session`;
//2. Invalidate a global session
var globalSessionInvalidateUrl =   `${LOGIN_API_URL}session`;

var headersObject ={};

module.exports = {


 /*

  A login ticket is requested by posting credentials and the required service:

  URL -> LOGIN_API_URL/loginticket

   BODY:
     {
       "login" : "tamedia.login+lmp@gmail.com" ,
       "password" : "test.1234",
       "service_id": "lematin"
     }
----------------
  RESPONSE:
     {
       "status": "ok",
       "data": {
         "login_ticket": "LT-ZrUyJNlnF2RojEqbWdKi03chXPMzp"
       }
     }


     {
        login_ticket:'LT-HAsaKFm1eol58P6uXSfx79WLOnyYT',
        service_id:'lematin',
        success_url:'http://www.google.ch',
        failure_url:'http://lematin.ch'
     }
 */
  // createLoginTicket:function(userLogin,userPassword){
  //    var loginTicketData ={
  //                           "login" : "tamedia.login+lmp@gmail.com" ,
  //                           "password" : "test.1234",
  //                           "service_id": "lematin"
  //                         };
  //    return  axios({
  //        method: 'post',
  //        url: loginTicketCreationUrl,
  //        data:{loginTicketData,
  //        headers: headersObject
  //      }).then(function (response) {
  //          console.log("createLoginTicket -response:",response);
  //          return response.data;
  //        })
  //        .catch(function (error) {
  //          console.log(error.message);
  //          return error;
  //        });
  //  },


 /*
  Request session
  A redirect service is provided for setting global sessions:

  GET /auth_v2/session?login_ticket=<TICKET>, // Ticket as received by credentials
  &service_id=<SERVICE_ID>, // Service to perform login on
  &success_url=<url>, // URL to redirect to in success case
  &failure_url=<url>, // URL to redirect to in failure case
  &remember_me=true|false // State of the remember me flag


 */

  // requestLoginSession: function(loginTicket){
  //     // Optionally the request above could also be done as
  //     axios.get(loginRequestSessionUrl, {
  //         params: {
  //           login_ticket: <TICKET>,
  //           service_id: <SERVICE_ID>,
  //           success_url=<url>,
  //           failure_url=<url>
  //         }
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // },


  /*

      SERVICE_ID:'service_id',
      SERVICE_ID_VALUE:'lematin',
      SUCCESS_URL:'http://localhost:3000/#/?loggedIn=true',
      FAILURE_URL:'http://localhost:3000/#/?loggedIn=false'

        Check for an existing Global Session

        GET /auth_v2/validate_global_session?

        service_id=<SERVICE_ID > // Service to perform login on
        &success_url=<url> // URL to redirect to in success case
        &failure_url=<url> // URL to redirect to in failure case
        &login_url=<url> // URL to redirect to when no session
  */
  checkIfValidGlobalSessionExist: function() {
    // Optionally the request above could also be done as
    return axios.get(globalSessionValidationUrl, {
        params: {
          service_id:  Environment.SERVICE_ID_VALUE,
          success_url: encodeURIComponent(Environment.SUCCESS_URL),
          failure_url: encodeURIComponent(Environment.FAILURE_URL),
          login_url:   encodeURIComponent(Environment.LOGIN_URL)
        },
        headers:{
          'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Origin':'*'
        }
      })
      .then(function (response) {
        console.log("checkIfValidGlobalSessionExist - succes ",response);
      })
      .catch(function (error) {
        console.log("checkIfValidGlobalSessionExist - error ",error);
        console.log(error);
      });
  },
   /*
    Terminate Global Session
    Terminate a global session of a user. This will also terminate all service sessions associated to this global session.
     DELETE /externalsso/auth/session/<session_id >
    */
      //TODO discss with the guy from zurich
      terminateGlobalSession:function(){

      }

}
