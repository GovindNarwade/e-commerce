const user = require("../model/user_model")
const bcrypt = require("bcryptjs")
exports.createUserDetails = async(req,res)=>{
try {
    const result = await user.create({
        UserId:Math.floor(Math.random()*10000),
        Name:req.body.Name,
        Email:req.body.Email,
        Password: bcrypt.hashSync(req.body.Password,10),
        Gender:req.body.Gender,
        DOB:req.body.DOB,
    })
res.json({
    success:true,
    message:"Create UserDetails",
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
exports.GetAllUserDetails = async(req,res)=>{
    try {
        const result = await user.find()
    res.json({
        success:true,
        message:"Get All User Details",
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
    exports.deleteUserDetails = async(req,res)=>{
        try {
            const result = await user.findOneAndDelete({UserId:req.params.UserId})
        res.json({
            success:true,
            message:"Delete User Details",
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
        exports.updateUserDetails = async(req,res)=>{
            try {
                const result = await user.findOneAndUpdate({UserId:req.body.UserId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update user Details",
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