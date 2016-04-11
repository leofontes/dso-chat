var moment = require('moment');

var now = moment();

/*
console.log(now.format()); //Basic timestamp

console.log(now.format('MMM Do YYYY, h:mma')); //Apr 10th 2016, 6:45 PM

now.subtract(1, 'year');
console.log(now.format()); */

console.log(now.format('X')); //Epoch time

console.log(now.format('x')); //Epoch times in miliseconds

console.log(now.valueOf()); //Epoch times in miliseconds as number

var timestamp = 1460346115863;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));