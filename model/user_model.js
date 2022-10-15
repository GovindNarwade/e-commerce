const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    UserId:{
        type:Number
    },
    Name:{
        type:String,
      
    },
    Email:{
        type:String,
      
    },
    Password:{
        type:String,
      
    },
    Gender:{
        type:String
    },
    DOB:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("user",userSchema)