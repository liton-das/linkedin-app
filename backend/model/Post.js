const { Schema, model, default: mongoose } = require("mongoose");

const postSchema = new Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    description:{
        type:String,
        default:''
    },
    image:{
        type:String
    },
    like:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    comment:[{
       content:{type:String},
       user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       }
    }]
},{timestamps:true})
const Post = model('Post',postSchema)
module.exports = Post