const isAuthenticated = require('../../../middlewares/isAuth')
const getUserController = require('../../controllers/userController')

const userApi = require('express').Router()

userApi.get('/currentuser',isAuthenticated,getUserController)

module.exports = userApi