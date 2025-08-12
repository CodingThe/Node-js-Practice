const fs= require("fs");
const readable = fs.createReadStream('examplet.txt',{encoding:'utf-8'});
readable.on('data',(chunk)=>{
    // console.log("chunk receviedggggggggggggggggggggggggg");
    console.log("chunk receviedggggggggggggggggggggggggg",chunk);
})

const writable = fs.createWriteStream('examplet.txt');
for(let i=0;i<999;i++){
    writable.write(`line ${i}`);
}

// piping from source to destinition
const source= fs.createReadStream('examplet.txt');
const destinition= fs.createWriteStream('examplet.txt');

source.pipe(destinition);

//transform

const {Transform} = require('stream');
const uppercaseTransform = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

fs.createReadStream('examplet.txt').pipe(uppercaseTransform).pipe(fs.createWriteStream('uppercase.txt'));