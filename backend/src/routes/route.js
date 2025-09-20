const authApi = require('./api/authRoutes')

const route = require('express').Router()
// auth route
route.use('/api/auth',authApi)

module.exports=route