const cloudinary = require('cloudinary').v2
const fs = require('fs')
cloudinary.config({
    cloud_name:'dwjtuk5wr',
    api_key:'596796834932469',
    api_secret:'w3rPiEZ1uAY5ZNJTAQJh8-A80sg'
})
const uploadImg = async(filePath)=>{
    try {
        if(!filePath) return null
        const upload = await cloudinary.uploader.upload(filePath)
        fs.unlinkSync(filePath)
        return upload.secure_url
    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error);
        
    }
}
module.exports=uploadImg