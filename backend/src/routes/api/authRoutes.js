const { singUpController, logInController } = require('../../controllers/authControllers')

const authApi=require('express').Router()
// signUp route

authApi.post('/signUp',singUpController)
authApi.post('/logIn',logInController)

module.exports=authApi