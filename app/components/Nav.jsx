var React = require('react');
var ReactDOM = require('react-dom');


var Constants = require('Constants');
var LeftMenu = require('LeftMenu');
var RightMenu = require('RightMenu');


var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({

  getInitialState: function() {
      return {
        isMobile: Constants.IS_MOBILE.any(),
        showLeftMenu: false,
        showRightMenu : false
      };
    },

  handleToggleMenu:function(menuposition ,e) {
     var clikOriginCLass = $(e.target) ? $(e.target).prop("class") :null
     console.log(clikOriginCLass)
     if(clikOriginCLass !== "fa fa-cog fa-lg" &&
        clikOriginCLass !== "fa fa-bars fa-lg" &&
        clikOriginCLass !== "menubtn" &&
        clikOriginCLass !== "menubtn-li"){

        return ;
     }
     //onToggleMenu={this.handleToggleMenu}
      switch (menuposition) {
        case Constants.MENU_RIGHT:
            if(this.state.showLeftMenu && !this.state.showRightMenu){
              this.setState({showLeftMenu:!this.state.showLeftMenu});
            }
            this.setState({showRightMenu:!this.state.showRightMenu});
          break;
          case Constants.MENU_LEFT:
            if(this.state.showRightMenu && !this.state.showLeftMenu){
              this.setState({showRightMenu:!this.state.showRightMenu});
            }
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
            <ul className="menubtn"   onClick={(e) =>this.handleToggleMenu('left',e)}>
                <li className="menubtn-li">
                    <i className="fa fa-bars fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                    <LeftMenu isVisible={showLeftMenu}  mobileVersion={isMobile}/>
              </li>
            </ul>
        </div>

        <div className="navigation-title">
            <p><b>Le matin </b> du soir</p>
        </div>
        <div className="navigation-right">
            <ul className="menubtn"   onClick={(e) =>this.handleToggleMenu('right',e)} >
                <li className="menubtn-li">
                    <i className="fa fa-cog fa-lg" aria-hidden="true" title="Toggle navigation"></i>
                    <RightMenu isVisible={showRightMenu}  />
                </li>
            </ul>
        </div>
    </div>
  );
}
});

module.exports = Nav;
