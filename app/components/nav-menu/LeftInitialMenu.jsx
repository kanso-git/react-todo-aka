var React = require('react');
var {Link, IndexLink} = require('react-router');

var LeftMenu = React.createClass({

  onToggleLeftMenuClicked:function(menuposition,button) {
    return ()=> this.props.onToggleLeftMenuClicked(menuposition,button);
  },
  onFlipperClicked:function(value) {
    return ()=> this.props.onFlipperBtn(value);
  },
  render:function(){
    var className = this.props.toggleMenu ? (this.props.onFlipper ? 'navigationhide front tile' : 'navigationshowmobile front tile') : 'navigationhide front tile';
    return (
      <div className={className}>
      	<input type="search" placeholder="Search" className="sidebarsearch"/>
      	<div className="menu" onClick={this.onToggleLeftMenuClicked('left','favoris')}>
      		<div className="main_content">
      			<i className="fa fa-bookmark test" aria-hidden="true"></i>
      			<p className="testtext">Favoris</p>
      		</div>
      	</div>
      	<div className="menu">
      		<div className="main_content">
      			<i className="fa fa-check-circle-o test" aria-hidden="true" onClick={this.onFlipperClicked(this.props.onFlipper)}></i>
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
      			<i className="fa fa-briefcase test" aria-hidden="true"></i>
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

module.exports = LeftMenu;
