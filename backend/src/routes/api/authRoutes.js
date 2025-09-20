const { singUpController } = require('../../controllers/authControllers')

const authApi=require('express').Router()
// signUp route

authApi.post('/signUp',singUpController)

module.exports=authApi