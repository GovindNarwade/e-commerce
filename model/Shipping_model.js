const mongoose = require("mongoose")
const shippingSchema = mongoose.Schema({
   ShippingId:{
    type:Number,
   },
   ShippingDate:{
    type:String,
   },
   ShippingType:{
      type:String
   },
   ProductId:{
      type:Number
  },
  Address:{
   type:String
  }
  
},{
timestamps:true
})
module.exports = mongoose.model("shipping",shippingSchema)