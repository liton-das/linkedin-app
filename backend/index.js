const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const dbConnection = require('./config/db.js')
const cookieParser = require('cookie-parser')
const  route  = require('./src/routes/route.js')
const app = express()
dotenv.config()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173/',
    credentials:true
}))
app.use(morgan('dev'))
app.use(route)


const port = process.env.PORT || 8080

app.listen(port,()=>{
    dbConnection()
    console.log('server is running on this port=',port);
    
})