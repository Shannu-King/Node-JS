const EventEmitter = require('events');
const emitter=new EventEmitter();
emitter.on('Hi',()=>{
console.log("Hi there");
});
emitter.emit('Hi');