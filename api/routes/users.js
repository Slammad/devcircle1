const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');


router.post('/signup',(req,res,next)=>{
    res.status(200).json({
        message:"Post Request to Sign up"
    })
})

module.exports=router