const order = require("../model/order_model")
exports.CreateOrderDetails = async(req,res)=>{
    try {
            const result = await order.create({
                ProductId:req.body.ProductId,
                OrderId:Math.floor((Math.random()*100000)+1),
                Total:req.body.Total
            })
            res.json({
                success:true,
                message:"Create Order Details",
                data:result
            })
        
       
    } catch (error) {
        res.json({
            success:false,
            message:`Something  went wrong `+{error},
            data:null
        })  
    }
}
exports.getAllorder = async(req,res)=>{
    try {
        const result = await order.aggregate([
            {
                $lookup:{
                    from:"products",
                    localField:"ProductId",
                    foreignField:"ProductId",
                    as:"Product"
                },
             
            },
           
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Order by Product Successfully ",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.deleteorderDetails = async(req,res)=>{
    try {
        const result = await order.findOneAndDelete({OrderId:req.params.OrderId})
        res.json({
            success:true,
            message:"Delete order Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateorderDetails = async(req,res)=>{
    try {
        const result = await order.findOneAndUpdate({OrderId:req.body.OrderId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update order Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}