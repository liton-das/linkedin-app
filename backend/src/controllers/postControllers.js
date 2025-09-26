const uploadImg = require("../../config/cloudinary")
const Post = require("../../model/Post")

const createPostController=async(req,res)=>{
    try {
        const {description}=req.body
        let createPost
        if(req.file){
            let image = await uploadImg(req.file.path)
            createPost = await new Post({
                author:req.userId,
                description,
                image
            })
        }else{
            createPost= await new Post({
                author:req.userId,
                description
            })
        }
        await createPost.save()
        return res.status(201).json({message:'post created successfully',createPost})
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
    
    
}

module.exports={
    createPostController
}