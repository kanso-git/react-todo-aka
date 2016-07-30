var React = require('react');

var InterestCheckboxItem = React.createClass({

  onToggleCheckbox:function() {
    var {categoryName} = this.props;
    this.props.onToggleCheckbox(categoryName);
  },
  render: function() {
   var {categoryName,isCategoryChecked} = this.props;
    return (
      <tr   onClick={this.onToggleCheckbox}>
        <td>
          <input
            type="checkbox"
            checked={isCategoryChecked}
          />
        </td>
        <td>
          {categoryName}
        </td>
      </tr>
    );
  }
});

module.exports = InterestCheckboxItem;
