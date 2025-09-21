const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const isAuthenticated = async (req,res,next)=>{
    try {
      let { token } =  req.cookies;
      console.log(token);
      
      if (!token) {
        return res.status(400).json({ message: "user token doesn't exists!" });
      }
      let varifyToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!varifyToken) {
        return res.status(400).json({ message: "user token not varifyed!" });
      }
      req.userId = varifyToken.userId;
      next();
    } catch (error) {
        return res.status(500).json({message:'Internal server error',error})
    }
}

module.exports = isAuthenticated