var React = require('react');

var Constants = require('Constants');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var MenuCheckboxItem = require('MenuCheckboxItem');


var ServicesListMenuItem = React.createClass({

  getInitialState:function(){
    return {
      services:[]
    }
  },
  getCardServices:function(){
    this.setState({
      services : UserInfoLocalStorge.getUserInfo().Services
    })
  },
  componentDidMount: function(){
    this.getCardServices();
  },

  onMenuSwitchView:function(value) {
    return ()=> this.props.onMenuSwitchView(value);
  },

  handleToggleCheckbox:function(serviceValue, menuName){
    var {services} = this.state;

    var myNewServices = services.map((service) => {
      if (Object.keys(service)[0] === serviceValue) {
        service[Object.keys(service)[0]] = !service[Object.keys(service)[0]];
        console.log("the value is " + Object.keys(service)[0] + " the key is " + service[Object.keys(service)[0]]);
        return service
      }
      return service;
    })
    var userInfo = UserInfoLocalStorge.getUserInfo();
    userInfo.Services = myNewServices;
    UserInfoLocalStorge.setUserInfo(userInfo);

    this.setState({
      services: myNewServices
    })
  },
  render:function(){
    var {services } = this.state;
    var serviceRows = services.map(
         (service) => {
          var key=Object.keys(service)[0];
          var serviceName=Object.keys(service)[0];
          var isServiceChecked =service[Object.keys(service)[0]];

          return (
            <MenuCheckboxItem key={key}
                   onToggleCheckbox={this.handleToggleCheckbox}
                   menuName={Constants.SERVICES_LEFT_MENU}
                elementName={serviceName} isElementChecked={isServiceChecked}/>

          )
        }
      )
    return (<div className="navigationshowmobile front tile">
      	<i className="fa fa-chevron-left designtext"  aria-hidden="true"  onClick=""></i>
      	<span className="title-menu"   onClick={this.onMenuSwitchView(Constants.MAIN_LEFT_MENU)}>Menu</span>
      	<span className="title">
         Mes Services
         </span>
      	<input type="search" placeholder="Search" className="sidebarsearch"/>
      	<table>
      		<tbody>{serviceRows}</tbody>
      	</table>
      </div>);
  }
});

module.exports = ServicesListMenuItem;
