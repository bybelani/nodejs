var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (req) {
  console.log('I hear a '+req+'!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler('scream'));

//Fire the 'scream' event:
eventEmitter.emit('scream');