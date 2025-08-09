const express = require('express');
const app = express();
const PORT = 3000;

// middleware
app.use((req,res,next)=>{
    console.log("method",req.method);
    console.log("url",req.url);
    next();
})

// routes
app.get('/',(req,res)=>{
    res.send("welcome to home page");
})

app.listen(PORT,()=>{
    console.log("app started");
})