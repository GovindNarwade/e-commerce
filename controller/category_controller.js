const category = require("../model/category_model")
exports.CreateCategoryDetails = async(req,res)=>{
    try {
            const result = await category.create({
                CategoryId:Math.floor((Math.random()*100000)+1),
                CategoryName:req.body.CategoryName,
            })
            res.json({
                success:true,
                message:"Create category Details",
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
exports.getAllCategory = async(req,res)=>{
    try {
        const result = await category.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All category ",
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
exports.deletecategoryDetails = async(req,res)=>{
    try {
        const result = await category.findOneAndDelete({CategoryId:req.params.CategoryId})
        res.json({
            success:true,
            message:"Delete category Details",
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
exports.updatecategoryDetails = async(req,res)=>{
    try {
        const result = await category.findOneAndUpdate({CategoryId:req.body.CategoryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update category Details",
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