const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const dbConnection = async () => {
   await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.8fmkte3.mongodb.net/?retryWrites=true&w=majority&appName=Linkedin`)
   .then(()=>{
        console.log('db connected successfully');
    }).catch(err=>{
        console.log('db disconnected!',err);
    })
}
module.exports=dbConnection