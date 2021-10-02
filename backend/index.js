const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url= "mongodb+srv://hackcmu2021:H4FKetjyDPLGRfAX@cluster0.bszm0.mongodb.net/HappinessVault?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const messageRouter = require('./routes/messages');
const userRouter = require('./routes/users');
app.use('/messages', messageRouter);
app.use('/users', userRouter);

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})