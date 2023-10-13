import express from 'express'
import bcryptjs from 'bcryptjs'
import verifytoken from '../verifytoken.js'
const router=express.Router()
import User from '../models/user.model.js'
import Post from '../models/post.model.js'
import Comment from '../models/comment.model.js'
router.post("/:id",verifytoken,async(req,res,next)=>{
    try{
        if(req.body.password){
            req.body.password=bcryptjs.hashSync(req.body.password,10)
        }
        const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)

    }
    catch(error){
        next(error)
    }
})
router.delete("/:id",verifytoken,async(req,res,next)=>{
    try{
       await User.findByIdAndDelete(req.params.id)
       await Post.deleteMany({userId:req.params.id})
       await Comment.deleteMany({userId:req.params.id})
       res.status(200).json('user deleted sucessfully')
    }
    catch(error){
        next(error)
    }
})
router.get("/:id",async(req,res,next)=>{
    try{
       const user= await User.findById(req.params.id)

       const{password,...info}=user._doc
       res.status(200).json(info)
    }
    catch(error){
        next(error)
    }
})
export default router