var React = require('react');
var {Link, IndexLink} = require('react-router');

var Constants = require('Constants');

var LeftMainMenu = React.createClass({

  onMenuSwitchView:function(value) {
    console.log("onMenuSwitchView ---:",value)
    return (()=> this.props.onMenuSwitchView(value));
  },

  onLinkMenuClick: function(menu_name){
     console.log("onLinkMenuClick ---:",menu_name)
      return (()=> this.props.onLinkMenuClick(menu_name));
  },

  render:function(){

    return (
      <div className="navigationshowmobile front tile"  >
      	<input type="search" placeholder="Search" className="sidebarsearch"/>
      	<div className="menu" >
      		<div className="main_content" onClick={this.onLinkMenuClick(Constants.FAVORITE_LEFT_MENU)}>
      			<i className="fa fa-bookmark test" aria-hidden="true"></i>
      			<p className="testtext">Favoris</p>
      		</div>
      	</div>
      	<div className="menu">
      		<div className="main_content"  onClick={this.onMenuSwitchView(Constants.INTERESTS_LEFT_MENU)}>
      			<i className="fa fa-check-circle-o test" aria-hidden="true"></i>
      			<p className="testtext">interets</p>
      		</div>
      	</div>
      	<div className="menu" >
      		<div className="main_content" onClick={this.onLinkMenuClick(Constants.HISTORY_LEFT_MENU)}>
      			<i className="fa fa-history test" aria-hidden="true"></i>
      			<p className="testtext">Historique</p>
      		</div>
      	</div>
      	<div className="menu" >
      		<div className="main_content" onClick={this.onMenuSwitchView(Constants.SERVICES_LEFT_MENU)}>
      			<i className="fa fa-briefcase test" aria-hidden="true"></i>
      			<p className="testtext">Serviciels</p>
      		</div>
      	</div>
      	<div className="signe">
      		<p className="text" onClick={this.onLinkMenuClick(Constants.SUJET_ACTUEL_LEFT_MENU)}>Sujets actuels</p>
      	</div>
      </div>
    );
  }
});

module.exports = LeftMainMenu;
