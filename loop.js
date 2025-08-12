console.log("Start");

setTimeout(()=>{
    console.log("timeout");
},0)

const prom = new Promise((resolve,reject)=>{
    console.log("promise");
})

setImmediate(()=>{
 console.log("setImmediate");   
})


console.log("continue");