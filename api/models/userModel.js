const mongoose = require('mongoose');

userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    communityname:{Type:String,required:true},
    email:{Type:String,required:true},
    password:{Type:String,required:true},
})


module.export=mongoose.model('User',userSchema)