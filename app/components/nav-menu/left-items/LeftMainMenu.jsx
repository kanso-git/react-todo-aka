var React = require('react');
var {Link, IndexLink} = require('react-router');

var Constants = require('Constants');

var LeftMainMenu = React.createClass({

  onMenuSwitchView:function(value) {
    return ()=> this.props.onMenuSwitchView(value);
  },

  render:function(){

    return (
      <div className="navigationshowmobile front tile"  >
      	<input type="search" placeholder="Search" className="sidebarsearch"/>
      	<div className="menu" onClick="">
      		<div className="main_content">
      			<i className="fa fa-bookmark test" aria-hidden="true"></i>
      			<p className="testtext">Favoris</p>
      		</div>
      	</div>
      	<div className="menu">
      		<div className="main_content">
      			<i className="fa fa-check-circle-o test" aria-hidden="true" onClick={this.onMenuSwitchView(Constants.INTERESTS_LEFT_MENU)}></i>
      			<p className="testtext">interets</p>
      		</div>
      	</div>
      	<div className="menu">
      		<div className="main_content">
      			<i className="fa fa-history test" aria-hidden="true"></i>
      			<p className="testtext">Historique</p>
      		</div>
      	</div>
      	<div className="menu">
      		<div className="main_content">
      			<i className="fa fa-briefcase test" aria-hidden="true"onClick={this.onMenuSwitchView(Constants.SERVICES_LEFT_MENU)}></i>
      			<p className="testtext">Serviciels</p>
      		</div>
      	</div>
      	<div className="signe">
      		<p className="text">Sujets actuels</p>
      	</div>
      </div>
    );
  }
});

module.exports = LeftMainMenu;
