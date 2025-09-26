const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        default:''
    },
    headline:{
        type:String
    },
    coverImg:{
        type:String,
        default:''
    },
    skills:[{type:String}],
    education:[{
        collage:{type:String},
        degree:{type:String},
        fieldOfStudy:{type:String}
    }],
    location:{type:String},
    gender:{
        type:String,
        enum:['male','female','other']
    },
    experience:[
        {
            title:{type:String},
            company:{type:String},
            decription:{type:String}
        }
    ],
    connection:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]

},{timestamps:true})

const User = model('User',userSchema)
module.exports = User