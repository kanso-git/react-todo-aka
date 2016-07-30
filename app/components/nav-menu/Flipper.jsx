var React = require('react');

var LeftInitialMenu = require('LeftInitialMenu');
var InterestMenu = require('InterestMenu');
var {Link, IndexLink} = require('react-router');

var Flipper = React.createClass({

  getInitialState: function() {
    return {
      flipped: this.props.flipped
    };
  },
  onToggleLeftMenuClicked:function(menuposition,button) {
    this.props.onMenuCategoryClick(menuposition,button);
  },
  onFlipperBtn:function(value) {
    this.setState({ flipped: !value });
  },
  render: function() {
    var className='';
    if(this.props.isMobile === null){
      className = this.props.toggleMenu ? "flipper-container " + this.props.orientation : 'navigationhide';
    }else {
      className = this.props.toggleMenu ? "flipper-container-mobile " + this.props.orientation : 'navigationhide';
    }
    return <div className={className}>
      <div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
        <LeftInitialMenu
          onFlipper={this.state.flipped}
          onToggleLeftMenuClicked={this.onToggleLeftMenuClicked}
          toggleMenu={this.props.toggleMenu}
          onFlipperBtn={this.onFlipperBtn}/>
        <InterestMenu
          onFlipper={this.state.flipped}
          toggleMenu={this.props.toggleMenu}
          onFlipperBtn={this.onFlipperBtn}/>
      </div>
    </div>;
  }
});

module.exports = Flipper;
