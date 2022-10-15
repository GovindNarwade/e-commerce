const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema({
    ReviewId:{
        type:Number,
    },
    UserId:{
        type:Number,
    },
   ratingNo:{
    type:Number,
   },
   ProductId:{
    type:Number,
},
Comment:{
    type:String,
}
},{
timestamps:true
})
module.exports = mongoose.model("review",reviewSchema)