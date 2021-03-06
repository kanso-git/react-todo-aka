var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var Main   = require('Main');
var Master = require('Master');
var Detail = require('Detail');
var Login  = require('Login');

// Load foundation
$(document).foundation();


// App css
require('style!css!sass!applicationStyles');



ReactDOM.render(

  <Router  history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="detail" component={Detail}/>
      <Route path="login" component={Login}/>
      <IndexRoute component={Master}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
