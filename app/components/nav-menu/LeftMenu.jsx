var React = require('react');


var Flipper = require('Flipper');
var {Link, IndexLink} = require('react-router');

var LeftMenu = React.createClass({

  getInitialState: function() {
    return {
      flipped: false
    };
  },

  componentDidMount:function() {
  },

  flip: function() {
    this.setState({ flipped: !this.state.flipped });
  },

  handleFlipperClicked:function(value) {
    this.setState({ flipped: !value });
  },

  onMenuCategoryClick:function(menuposition,button) {
    this.props.onToggleLeftMenuClicked(menuposition,button);
  },

  render: function() {
    return (
     <div>
     	<Flipper flipped={this.state.flipped} onMenuCategoryClick={this.onMenuCategoryClick} toggleMenu={this.props.toggleMenu} onFlipperClicked={this.handleFlipperClicked} isMobile={this.props.mobileVersion} orientation="horizontal" />
     </div>
    );
  }

});

module.exports = LeftMenu;
