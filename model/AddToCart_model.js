const mongoose = require("mongoose")

const AddtoCartSchema = mongoose.Schema({
    CartId:{
        type:Number
    },
    UserId:{
        type:Number
    },
    ProductId:{
        type:Number
    },

   
},{
timestamps:true
})
module.exports = mongoose.model("addtocart",AddtoCartSchema)