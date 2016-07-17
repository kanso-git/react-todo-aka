var React = require('react');
var Nav = require('Nav');

var Main = (props)=>{
  return (
    <div>
      <div className="wrap-center">
       {props.children}
      </div>
    </div>
  )
}
module.exports = Main;
