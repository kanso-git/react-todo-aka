var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

var Main = (props)=>{
  return (
    <div>
        <Nav/>
        <div className="wrap-center container-fluid">
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}
module.exports = Main;
