const { default: mongoose } = require("mongoose");
const uploadImg = require("../../config/cloudinary");
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
// update user profile controller 
 const updateUserProfileController=async(req,res)=>{
    try {
        const {firstName,lastName,userName,email,headline,gender,location}=req.body
        let skills=req.body.skills?JSON.parse(req.body.skills): []
        let education=req.body.education?JSON.parse(req.body.education) : []
        let experience = req.body.experience?JSON.parse(req.body.experience):[]
    let profileImg
    let coverImg
    console.log('uplod img file',req.files);
    if(req.files.profileImg){
        profileImg =await uploadImg(req.files.profileImg[0].path)
    }
    if(req.files.coverImg){
        coverImg =await uploadImg(req.files.coverImg[0].path)
    }
    console.log('userId',req.userId);
    
    const user =await User.findByIdAndUpdate(req.userId,{
            firstName,
            lastName,
            userName,
            email,
            headline,
            skills,
            education,
            experience,
            gender,
            location,
            profileImg,
            coverImg
    },{new:true}).select('-password')
        return res.status(200).json({message:'user profile updated successfully'},user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'},error)
    }
}
module.exports = {getUserController,updateUserProfileController}