var React = require('react');
var $ = require('jquery');

 //url(http://wallpapercraze.com/images/wallpapers/hour_glass_loading_w1.jpeg) repeat-y 50%;

var Loading = ()=>{
  var wid= $( window ).width();
  var hei= $( window ).height();
  var imgUrl = "loading.gif";

  var divStyle = {
  width:wid,
  height:hei,
  backgroundImage: 'url(' + imgUrl + ') repeat-y 50%',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  return (
    <div className="loading" >
      <img className="loading-image" src='loading.gif'></img>
   </div>
  );

}

module.exports = Loading;
