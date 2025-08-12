// const myPromise = new Promise((resolve,reject)=>{
//     const success  = false;
//     if(success){
//         resolve("task completed");
//     }else{
//         reject("task issue");
//     }
// })

// const isPromise = myPromise;
// isPromise.then(data=>{
//     console.log(data);
// }).catch(data=>{
//     console.log(data);
// })

//Promise all
const promise1= new Promise((resolve,reject)=>{
resolve("promise1");
})

const promise2= new Promise((resolve,reject)=>{
resolve("promise2");
})

Promise.all([promise1,promise2]).then(data=>{
    console.log("this is promise",data);
})
//Promise race

const p1= new Promise(resolve=>setTimeout(()=> resolve("p1"),100));
const p2= new Promise(resolve=>setTimeout(()=> resolve("p2"),200));

Promise.race([p1,p2]).then(value=>console.log(value));

//Promise allSettled

Promise.allSettled([p1,p2]).then(result=>console.log(result));