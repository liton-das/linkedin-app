const authApi = require('./api/authRoutes')
const userApi = require('./api/userRoutes')

const route = require('express').Router()
// auth route
route.use('/api/auth',authApi)
// get user route
route.use('/api/user',userApi)

module.exports=route