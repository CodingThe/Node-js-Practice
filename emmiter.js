const EventEmitter = require('events');

const emitter = new EventEmitter();

const greetlistner = () => {
    console.log("hi from event listner");
};

emitter.on('greet', greetlistner);

emitter.once('greet',()=>{
    console.log('this hi');
})

emitter.removeAllListeners('greet');
// emitter.removeListener('greet', greetlistner);


// emitter.addListener('grat', ()=>{
//     console.log("this is grat listner");
// })
emitter.emit('greet');
emitter.emit('greet');
emitter.emit('grat');
