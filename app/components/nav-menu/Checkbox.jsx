var React = require('react');

var Constants = require('Constants');
var MatinPremiumAPI= require('MatinPremiumAPI');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var Utility = require('Utility');
var {Link, IndexLink} = require('react-router');

var CheckBox = React.createClass({

  getInitialState: function() {
    return {
      ischecked: this.props.isChecked
    };
  },

  onChange:function() {
    var {idd} = this.props.categoryname;
    this.setState({
      ischecked: !this.state.ischecked
    });
    this.props.onToggle(this.props.categoryname);
  },
  render: function() {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={this.state.ischecked}
            onChange={this.onChange}/>
        </td>
        <td>
          {this.props.categoryname}
        </td>
      </tr>
    );
  }
});

module.exports = CheckBox;
