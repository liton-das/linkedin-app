const User = require("../../model/User")
const bcrypt = require('bcryptjs')
// signUp controller 
const singUpController= async (req,res)=>{
    try {
        const {firstName,lastName,userName,email,password}=req.body
        const existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({message:'user email already exist!'})
        }
        const existUserName= await User.findOne({userName})
        if(existUserName){
            return res.status(400).json({message:'user name already in use!'})
        }
        const hashed = await bcrypt.hash(password,11)
        const user = new User({
            firstName,
            lastName,
            userName,
            email,
            password:hashed
        })
        await user.save()
        .then(()=>{
            return res.status(201).json({message:'user created successfully'})
        }).catch(err=>{
            return res.status(400).json({message:'user not created!',err})
        })
    } catch (error) {
        return res.status(500).json({message:'Internal server error!',error})
    }
}


module.exports={
    singUpController
}