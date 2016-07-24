
//const url="http://jsonplaceholder.typicode.com/posts/1"; //getrandom json output
/**  promise exmaple **/
// var axios = require('axios');
// const url ="http://premium-lematin.xyz/wp-json/getStartingCards/0";
// axios.get(url)
//    .then(res => console.log(JSON.stringify(res.data[0].card.options,null,3)),error=> console.log('error ...'))

/*  Destructuring ES6 new feature */

// makeSound({
//  specie: 'dog',
//  weight: 23,
//  sound: 'woof'
// })
//
// /* implemention 1 */
// function makeSound(options){
//   var { specie, sound } = options ;
//   specie = specie || 'animal';
//   console.log('the  '+specie+ ' says '+ sound +' !');
// }
//
//
// makeSound2({
//  specie: 'dog',
//  weight: 23,
//  sound: 'woof'
// })
// /* implemention 2 */
// function makeSound2({ specie ='animal', sound }){
//   console.log('the  '+specie+ ' says '+ sound +' !');
// }


// what is reduce function ?
var orders=[
  {amount:250},
  {amount:250},
  {amount:250},
  {amount:250},
];
var totalAmount = 0;

for(var i =0; i< orders.length; i++){
  totalAmount += orders[i].amount
}
console.log("reduce-example totalAmount",totalAmount);
//0 is the starting value, sum is the first parameter, order is the iterator parameter
var totalAmountReduce= orders.reduce(function(sum,order){
   return sum += order.amount;
},0)
console.log("reduce-example totalAmountReduce",totalAmountReduce);

var orders=[
  250,
  300,
  400,
  750,
];
var totalAmountReduceEnhanced= orders.reduce(function(sum,order){
   console.log("totalAmountReduceEnhanced ",sum, order);
   return  (sum || 0 ) +  order;
})
console.log("reduce-example totalAmountReduceEnhanced",totalAmountReduceEnhanced);


// what is map function ? map takes an array and transform it to an array of the same length
// but with each individual item transformed

var categories =[
  {"Sport":1},
  {"Economie":1},
  {"People":1},
  {"UDC":1},
  {"BUZZ":0},
  {"AUTO":1}]
var catSearch ="UDC";
var userTikedCategories = categories.filter((obj)=>{
  var value = obj[Object.keys(obj)[0]];
  return value==1? true:false
}).map(function(obj){
  return Object.keys(obj)[0];
})
console.log("UserTikedCategories ",userTikedCategories);

if( userTikedCategories.find((cat) => cat === catSearch)){
  console.log("exist ",catSearch);
}else{
  console.log("doesn't exist");
}



// what is filter function? filter  takes an array and transform it to a smaller array

// what is find function? find takes an array and retun an array with the first item


/* Arrow function Vs normal function */
const dragonEvents=[
  {type:'attack',value:12,traget:'player-dorkman'},
  {type:'yawn',value:40},
  {type:'eat',traget:'horse'},
  {type:'attack',value:23,traget:'player-fluffykins'},
  {type:'attack',value:12,traget:'player-dorkman'}
]

// normal function version
const totalDamageOnDorkman = dragonEvents
.filter(function(event){
  return event.type ==='attack'
})
.filter(function(event){
  return event.traget ==='player-dorkman'
})
.map(function(event){
  return event.value
})
.reduce(function(prev,value){
  return (prev || 0) + value
})

console.log('noraml-function totalDamageOnDorkman\n',totalDamageOnDorkman);

// shorter function version
const totalDamageOnDorkmanShorter = dragonEvents
.filter( e => e.type ==='attack')
.filter( e => e.traget ==='player-dorkman')
.map( e => e.value)
.reduce((prev,value)=> (prev || 0) + value)

console.log('shorter-function totalDamageOnDorkmanShorter\n',totalDamageOnDorkmanShorter);
