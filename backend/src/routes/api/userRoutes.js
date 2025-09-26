const isAuthenticated = require('../../../middlewares/isAuth')
const upload = require('../../../middlewares/multer')
const {getUserController, updateUserProfileController} = require('../../controllers/userController')

const userApi = require('express').Router()

userApi.get('/currentuser',isAuthenticated,getUserController)
userApi.put('/updateProfile',isAuthenticated,upload.fields([
    {name:"profileImg", maxCount:1},
    {name:"coverImg",maxCount:1}
]),updateUserProfileController)

module.exports = userApi