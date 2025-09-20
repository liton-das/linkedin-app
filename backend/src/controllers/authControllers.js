const generateToken = require("../../config/token.js")
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
        const token = await generateToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7 * 24 * 60 * 60 * 1000,
            sameSite:'strict',
            secure:process.env.NODE_ENVIROMENT === 'production'
        })
  
        return res.status(201).json({message:'user created successfully'})
        
    } catch (error) {
        return res.status(500).json({message:'Internal server error!',error})
    }
}

// logIn controller 
const logInController =async (req,res)=>{
    try {
        const {email,password}=req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'Invalid creadintial!'})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message:'Invalid creadintial!'})
            const token =await generateToken(user._id)
            res.cookie('token',token,{
                httpOnly:true,
                maxAge:7 * 24 * 60 * 60 * 1000,
                sameSite:'strict',
                secure:process.env.NODE_ENVIROMENT === 'production'
            })
            return res.status(200).json({message:'loged In Successfully'})
    } catch (error) {
        return res.status(500).json({message:'Internal server error!',error})
    }
}
module.exports={
    singUpController,
    logInController
}