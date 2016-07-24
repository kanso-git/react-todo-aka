var moment = require('moment');
    moment.locale('fr');
    //console.log(moment().format());


// unix timestamp
// January 1st 1970  at 12:00am -> 0
// January 1st 1970  at 12:01am -> 60

// var now = moment();
//
// console.log('Current timestamp ',now.unix());

var timestamp = 1469095156;
// var currentMoment = moment.unix(timestamp); //timestamp:1469268670,
// console.log('Current moment MMM D, YY @ h:mm a =', currentMoment.format('MMM D, YY @ h:mm a'));
// console.log('Current moment MMMM Do, YYYY @ h:mm A=', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

var currentElapsedTime = moment( moment.unix(timestamp)).from();
console.log('Elapsed time',  currentElapsedTime);
