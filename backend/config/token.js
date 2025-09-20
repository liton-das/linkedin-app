const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const generateToken = async (userId) => {
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECRET_KEY)
        return token
    } catch (error) {
        console.log(error);
        
    }
}
module.exports= generateToken