var React = require('react');

var Constants = require('Constants');
var LeftMainMenu = require('LeftMainMenu');
var InterestListMenuItem = require('InterestListMenuItem');
var ServicesListMenuItem = require('ServicesListMenuItem');


var {Link, IndexLink} = require('react-router');

var LeftMenuContainer = React.createClass({

  getInitialState:function(){
    return {
      visibleMenuItem:Constants.MAIN_LEFT_MENU
    }
  },
  hanleMenuSwitchView:function(menuToShow) {
     // switch between the 2 menus
     this.setState({
       visibleMenuItem:menuToShow
     })

  },
  handleLinkMenuClick: function(menu_name){
    console.log("menu_name",menu_name)
    if(typeof menu_name ==='string' && menu_name.trim().length>0){
      window.location.hash ='#/?menuSelection='+encodeURIComponent(menu_name);
    }
    $('#menubtn_left').click();
  },
  render: function() {

    var {isMobile,isVisible,orientation}   = this.props;

    var className='';
    // if(isMobile === null){
    //   className = isVisible ? "flipper-container " + orientation : 'navigationhide';
    // }else {
    //   className = isVisible ? "flipper-container-mobile " + orientation : 'navigationhide';
    // }
    className = !isVisible?'navigationhide':' flipper-container horizontal ';
    var renderVisibleMenu = () =>{
      var {visibleMenuItem }   = this.state;

      switch (visibleMenuItem) {
        case Constants.MAIN_LEFT_MENU:
           return <LeftMainMenu  onLinkMenuClick ={this.handleLinkMenuClick} onMenuSwitchView={this.hanleMenuSwitchView}/>
        break;
        case Constants.INTERESTS_LEFT_MENU:
           return <InterestListMenuItem  onMenuSwitchView={this.hanleMenuSwitchView}/>
        break;
        case Constants.SERVICES_LEFT_MENU:
           return <ServicesListMenuItem  onMenuSwitchView={this.hanleMenuSwitchView}/>
        break;
      }
    };

    return(
      <div className={className}>
        <div className="flipper " >
            {renderVisibleMenu()}
        </div>
      </div>
    )
  }
});

module.exports = LeftMenuContainer;
