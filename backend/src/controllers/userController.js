const User = require("../../model/User")

const getUserController=async(req,res)=>{
    try {
        console.log('curr',req.userId);
        
        const user = await User.findById(req.userId).select('-password')
        if(!user){
            return res.status(400).json({message:'user not found!'})
        }
        return res.status(200).json({message:'all user',user})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}
module.exports = getUserController