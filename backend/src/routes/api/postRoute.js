const isAuthenticated = require('../../../middlewares/isAuth')
const upload = require('../../../middlewares/multer')
const { createPostController } = require('../../controllers/postControllers')

const postApi=require('express').Router()

postApi.post('/createPost',isAuthenticated,upload.single('image'),createPostController)



module.exports={
    postApi
}