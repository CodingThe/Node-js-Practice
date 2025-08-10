const express = require('express');
const app = express();
const PORT = 3000;

// global middleware
app.use((req,res,next)=>{
    console.log("method",req.method);
    console.log("url",req.url);
    next();
})

// route level
const chechAuth = (req,res,next)=>{
    console.log("this is route level middleware");
    next();
}

// inbilt
app.use(express.json());

//error handling
app.use((err,req,res,next)=>{
    console.log("this is error",err.message);
    res.status(500).send("something broke");
}) 

const users =[{id:1, Name: "john", greet:"hi"}];

// routes
app.get('/',(req,res)=>{
    res.send("welcome to home page");
})

app.get('/getUsers', chechAuth, (req ,res) => {
    res.send(users);
})


app.get('/getUsersById/:id', (req ,res) => {
    res.send(users.filter(user=>user.id == req.params.id));
})

app.post('/registerUser',(req,res)=>{
    users.push(req.body.user);
    res.send(users);
})

app.post('/updateUser',(req,res)=>{
    users[req.body.user.id] =req.body.user;
})


app.listen(PORT,()=>{
    console.log("app started");
})