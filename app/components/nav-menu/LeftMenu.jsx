var React = require('react');

var LeftMenuContainer = require('LeftMenuContainer');

var LeftMenu = React.createClass({
  render: function() {
    var {isVisible,mobileVersion} = this.props;
    return (
     <div>
     	<LeftMenuContainer
               isVisible={isVisible}
               isMobile={mobileVersion}
               orientation="horizontal" />
     </div>
    );
  }

});

module.exports = LeftMenu;
