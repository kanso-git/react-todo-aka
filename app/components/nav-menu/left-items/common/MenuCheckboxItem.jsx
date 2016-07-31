var React = require('react');

var MenuCheckboxItem = React.createClass({

  onToggleCheckbox:function() {
    var {elementName,menuName} = this.props;
    this.props.onToggleCheckbox(elementName,menuName);
  },
  render: function() {
   var {elementName,isElementChecked} = this.props;
    return (<tr  onClick={this.onToggleCheckbox}>
        <td>
          <input type="checkbox" checked={isElementChecked} onChange={this.onToggleCheckbox}/>
        </td>
        <td>{elementName}</td>
      </tr>);
  }
});

module.exports = MenuCheckboxItem;
