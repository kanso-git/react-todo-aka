//var redux = require('redux');

console.log('Starting redux exmaple');


//pure function are synchronyse
function add(a,b){
  return a+b;
}

/*
 what are the critierias of a pure function
 1- shoudn't update and external variable
 var result;
  function add (a,b){
  result = a+b ;
  return b;
  }


 2- shoudn't rely on any external variable (e.g date or any outside variable)
 var a=3
 function add (b){
  return a +b or a+ new Date().getSeconds()
 }

 3- shoudn't update any of the passed parameter
 function changeProp(obj){
 obj.name = 'aka'
  return obj

 }
 var res = changeProp({
  name: 'abdallah '
 });
 4- shoudn't handle promise or callback .


*/

// we aren't updating the passed object :)
function changeProp(obj){
    return {
      ...obj,
      name:'aka'
    };
}
var obj0={
  name:'name0',
  age:0
}
var res = changeProp(obj0);
console.log(obj0);
console.log(res);
