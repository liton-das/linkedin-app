const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dbConnection = require('./config/db.js')
const cookieParser = require('cookie-parser')
const  route  = require('./src/routes/route.js')
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(route)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
// all middleware need to separate 
const middleware=[
    morgan('dev'),
    bodyParser.urlencoded()
]

const port = process.env.PORT || 8080

app.listen(port,()=>{
    dbConnection()
    console.log('server is running on this port=',port);
    
})