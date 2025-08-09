const fs=require("fs");

// //read file

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err) return console.error(err);
//     console.log(data);
// })

// const data=fs.readFileSync('example.txt','utf-8');
// console.log("data",data);

// //write file
// fs.writeFile('example.txt',"Hi ji",(err)=>{
//     if(err) return console.log(err);
//     console.log("file written");
// })

// fs.writeFileSync('example.txt',"hello ji");

// //append data
// fs.appendFile('example.txt','this is ponga',(err)=>{
//     if(err) throw err;
//     console.log("append");
// })

// fs.appendFileSync('example.txt','this is append sync')

// //unlink file
// fs.unlink('example.txt',(err)=>{
//     if(err) throw err;
//     console.log("hi");
// })

// create directory
fs.mkdir('myFolder',{recursive:true},(err)=>{
    if(err) throw err;
    console.log("folder created");
})

// read directory
fs.readdir('./myFolder',(err,files)=>{
    if(err) throw err;
    console.log(files);
})

// rename file
fs.rename("example.txt",'examplet.txt',()=>{

});

// check exists
if(fs.existsSync("example.txt")){
    console.log("file")
}