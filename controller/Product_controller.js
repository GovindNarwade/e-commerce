const product = require("../model/Product_mode")
exports.createProductDetails = async(req,res)=>{
try {
    const result = await product.create({
        ProductId:Math.floor(Math.random()*10000),
        ProductName:req.body.ProductName,
        ProductDescription:req.body.ProductDescription,
        ProductPrize:req.body.ProductPrize,
        ProductSize:req.body.ProductSize,
        ProductImage:req.body.ProductImage
    })
res.json({
    success:true,
    message:"Create Product Details",
    data:result,
})
} catch (error) {
    res.json({
        success:false,
        message:"Something went worng",
        data:null,
    })
}
}
exports.GetAllProductDetails = async(req,res)=>{
    try {
        const result = await product.find()
    res.json({
        success:true,
        message:"Get All Product Details",
        data:result,
    })
    } catch (error) {
        res.json({
            success:false,
            message:"Something went worng",
            data:null,
        })
    }
    }
    exports.DeleteProductDetails = async(req,res)=>{
        try {
            const result = await product.findOneAndDelete({ProductId:req.params.ProductId})
        res.json({
            success:true,
            message:"Delete Product Details by ProductId",
            data:null,
        })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
