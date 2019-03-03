const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const app =express();
const userRoutes= require('./api/routes/users')
mongoose.connect("mongodb://localhost:27017/devcircle",{
    useNewUrlParser:true
});

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))

app.use('/users',userRoutes);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Sent a get request to server"
    })
})
module.exports=app
