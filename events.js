const EventEmitter=require('./events');
const myevents=new EventEmitter();
myevents.emit('Greet',()=>
{
console.log("Hello World");
});
myevents.on('Greet');
