var React = require('react');

var MenuCheckboxItem = React.createClass({

  onToggleCheckbox:function() {
    var {categoryName,menuName} = this.props;
    this.props.onToggleCheckbox(categoryName,menuName);
  },
  render: function() {
   var {categoryName,isCategoryChecked} = this.props;
    return (
      <tr   onClick={this.onToggleCheckbox}>
        <td>
          <input
            type="checkbox"
            checked={isCategoryChecked}
            onChange={this.onToggleCheckbox}
          />
        </td>
        <td>
          {categoryName}
        </td>
      </tr>
    );
  }
});

module.exports = MenuCheckboxItem;
