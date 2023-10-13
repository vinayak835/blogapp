import mongoose, { Schema, model } from "mongoose"
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:false

    },
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
    
    }
},{timestamps:true})
const Post=mongoose.model('Post',postSchema);
export default Post;