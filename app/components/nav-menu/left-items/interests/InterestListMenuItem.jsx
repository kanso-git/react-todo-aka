var React = require('react');

var Constants = require('Constants');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var InterestCheckboxItem = require('InterestCheckboxItem');


//flipped={flipped} isVisible={isVisible}   onFlipperClick
var InterestListMenuItem = React.createClass({

  getInitialState:function(){
    return {
      categories:[]
    }
  },
  getCardCategories:function(){
    this.setState({
      categories : UserInfoLocalStorge.getUserInfo().categories
    })
  },
  componentDidMount: function(){
    this.getCardCategories();
  },

  onMenuSwitchView:function(value) {
    return ()=> this.props.onMenuSwitchView(value);
  },

  handleToggleCheckbox:function(catId){
    var {categories} = this.state;
    var newLikeCards = [];
    var myCategories = categories.map((cat) => {
      if (Object.keys(cat)[0] === catId) {
        cat[Object.keys(cat)[0]] = !cat[Object.keys(cat)[0]];
        console.log("the value is " + Object.keys(cat)[0] + " the key is " + cat[Object.keys(cat)[0]]);
        return cat
      }
      return cat;
    })
    var userInfo = UserInfoLocalStorge.getUserInfo();
    userInfo.categories = myCategories;
    UserInfoLocalStorge.setUserInfo(userInfo);

    this.setState({
      categories: myCategories
    })
  },
  render:function(){
    var {categories } = this.state;
    var categoryRows = categories.map(
         (category) => {
          var key=Object.keys(category)[0];
          var categoryName=Object.keys(category)[0];
          var isCategoryChecked =category[Object.keys(category)[0]];

          return (
            <InterestCheckboxItem key={key}
                   onToggleCheckbox={this.handleToggleCheckbox}
                categoryName={categoryName} isCategoryChecked={isCategoryChecked} />

          )
        }
      )
    return (
      <div className="navigationshowmobile front tile">
      	<i className="fa fa-chevron-left designtext"  aria-hidden="true"  onClick=""></i>
      	<span className="title-menu"   onClick={this.onMenuSwitchView(Constants.MAIN_LEFT_MENU)}>Menu</span>
      	<span className="title">
         Mes interets
         </span>
      	<input  type="search" placeholder="Search"    className="sidebarsearch"/>
      	<table>
      		<tbody> {categoryRows}  </tbody>
      	</table>
      </div>
    );
  }
});

module.exports = InterestListMenuItem;
