const { singUpController, logInController, logOutController } = require('../../controllers/authControllers')

const authApi=require('express').Router()
// signUp route

authApi.post('/signUp',singUpController)
authApi.post('/logIn',logInController)
authApi.get('/logOut',logOutController)
module.exports=authApi