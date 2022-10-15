const mongoose = require("mongoose")

const CategorySchema = mongoose.Schema({
    CategoryId:{
        type:Number,
    },
    CategoryName:{
        type: Number
    },
   
},{
timestamps:true
})
module.exports = mongoose.model("category",CategorySchema)