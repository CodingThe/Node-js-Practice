const express = require('express');
const app = express();
const PORT = 3000;
import cors from 'cors';

// cores
app.use(cors());

// cors restriction
const corsOptions={
    origin:'http//frontend.com',
    methods:'GET,POST,PUT,DELETE',
    allowedHeader: 'Content-Type, Authrization'
}
app.use(cors(corsOptions));

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


app.use((req, res, next) => {
    // Custom property on request
    req.requestTime = new Date();

    // Custom method on response
    res.success = (data) => {
        res.status(200).json({
            status: "success",
            timestamp: req.requestTime,
            data
        });
    };

    res.error = (message, code = 500) => {
        res.status(code).json({
            status: "error",
            timestamp: req.requestTime,
            message
        });
    };

    next();
});

const users =[{id:1, Name: "john", greet:"hi"}];

// routes
app.get('/',(req,res)=>{
    res.send("welcome to home page");
})

app.get('/getUsers', chechAuth, (req ,res) => {
    res.success({ name: "John Doe", age: 25 });
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