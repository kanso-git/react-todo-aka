var React = require('react');
var ReactDOM = require('react-dom');

var LeftMenu = require('LeftMenu');
var RightMenu = require('RightMenu');
var Constants = require('Constants');

var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({

  getInitialState: function() {
      return {
        clicked: false,
        isMobile: Constants.IS_MOBILE.any(),
        showLeftMenu: false,
        showRightMenu : false,
        windowWidth : window.innerHeight
      };
    },

  onToggleMenu:function(menuposition) {
      switch (menuposition) {
        case Constants.MENU_RIGHT:
            this.setState({showRightMenu:!this.state.showRightMenu});
          break;
          case Constants.MENU_LEFT:
            this.setState({showLeftMenu:!this.state.showLeftMenu});
            break;
        default:
      }
},

render:function(){
   var {showLeftMenu,showRightMenu,isMobile} = this.state;

  return (
    <div className="navigation">
        <div className="navigation-left">
            <ul className="menubtn">
                <li>
                  <i className="fa fa-bars fa-lg" aria-hidden="true" title="Toggle navigation"  onClick={() =>this.onToggleMenu('left')}></i>
                    <LeftMenu toggleMenu={showLeftMenu} onToggleLeftMenuClicked={this.onToggleMenu} mobileVersion={isMobile}/>
              </li>
            </ul>
        </div>

        <div className="navigation-title">
            <p><b>Le matin </b> du soir</p>
        </div>
        <div className="navigation-right">
            <ul className="menubtn" >
                <li>
                    <i className="fa fa-cog fa-lg" aria-hidden="true" title="Toggle navigation" onClick={() =>this.onToggleMenu('right')}></i>
                    <RightMenu toggleMenu={showRightMenu}  onToggleLeftMenuClicked={this.onToggleMenu}/>
                </li>
            </ul>
        </div>
    </div>
  );
}
});

module.exports = Nav;
