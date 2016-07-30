var React = require('react');

var Constants = require('Constants');
var MatinPremiumAPI= require('MatinPremiumAPI');
var UserInfoLocalStorge= require('UserInfoLocalStorge');
var Utility = require('Utility');
var CheckBox = require('CheckBox');
var {Link, IndexLink} = require('react-router');

var InterestMenu = React.createClass({

  getInitialState: function() {
    return {
      cards:[],
      flipped: false
    };
  },

  getCategoriesCard:function(){
    var userInfo = UserInfoLocalStorge.getUserInfo();
    this.setState({cards: userInfo.categories})
  },

  componentDidMount: function(){
    this.getCategoriesCard();
  },

  onToggleLeftMenuClicked:function(menuposition,button) {
    return ()=> this.props.onToggleLeftMenuClicked(menuposition,button);
  },
  flip: function() {
    this.setState({ flipped: !this.state.flipped });
  },
  onFlipperClicked:function(value) {
    return ()=> this.props.onFlipperBtn(value);
  },
  handleInterestClicked:function(catId){
    var userInfo = UserInfoLocalStorge.getUserInfo();
    var categories = userInfo.categories;
    var newLikeCards = [];
    var myCategories = categories.map((cat) => {
      if (Object.keys(cat)[0] === catId) {
        cat[Object.keys(cat)[0]] = !cat[Object.keys(cat)[0]];
        console.log("the value is " + Object.keys(cat)[0] + " the key is " + cat[Object.keys(cat)[0]]);
        return cat
      }
      return cat;
    })
    userInfo.categories = myCategories;
    UserInfoLocalStorge.setUserInfo(userInfo);
    this.setState({
      cards: UserInfoLocalStorge.getUserInfo().categories
    })
  },
  render:function(){
    var className = this.props.toggleMenu ? (this.props.onFlipper ? 'navigationshowmobile back tile' : 'navigationhide back tile' ) : 'navigationhide back tile';
    console.log("this.props.mobileVersion "+ this.props.onFlipper);
    console.log("cards we are  " + this.state.cards);
    var rows = [];
    this.state.cards.forEach(function(cat) {
      rows.push(
        <CheckBox
          key={Object.keys(cat)[0]}
          onToggle={this.handleInterestClicked}
          categoryname={Object.keys(cat)[0]}
          isChecked={cat[Object.keys(cat)[0]]} />
      );
    }.bind(this));

    return (
      <div className={className}>
      	<i className="fa fa-chevron-left designtext"
            aria-hidden="true"
            onClick={this.onFlipperClicked(this.props.onFlipper)}></i>
      	<span className="title-menu"
            onClick={this.onFlipperClicked(this.props.onFlipper)}>Menu</span>
      	<span className="title">
         Mes interets
         </span>
      	<input  type="search"
            placeholder="Search"
            className="sidebarsearch"/>
      	<div className="filtrediv"
            onClick={this.onToggleLeftMenuClicked('left','favoris')}>
      		<span className="filtretext">Filtre</span>
      		<span className="filtrecount">
            3 filtre active
            </span>
      		<i className="fa fa-chevron-right filtregoto"
               aria-hidden="true"></i>
      	</div>
      	<table>
      		<tbody> {rows}  </tbody>
      	</table>
      </div>
    );
  }
});

module.exports = InterestMenu;
