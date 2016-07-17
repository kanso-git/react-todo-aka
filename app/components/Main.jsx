var React = require('react');
var Nav = require('Nav');

var Main = (props)=>{
  return (
    <div>


          <div className="">
           {props.children}
          </div>
        

    </div>
  )
}
module.exports = Main;
