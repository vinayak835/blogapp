import mongoose, { Schema, model } from "mongoose"
const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true,
        
    },
    author:{
        type:String,
        required:true,
        
    },
    postId:{
        type:String,
        required:true

    }, userId:{
        type:String,
        required:true,
    },
},{timestamps:true})
const Comment=mongoose.model('Comment',commentSchema);
export default Comment;