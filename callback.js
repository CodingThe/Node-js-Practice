function greet(name,callback){
    console.log("hello",name);
    callback();
}

const sayHi=()=>{
    console.log("this is sayhi");
}
greet("India",sayHi);