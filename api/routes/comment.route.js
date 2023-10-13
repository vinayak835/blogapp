import express from 'express'
import Comment from '../models/comment.model.js'
import verifytoken from '../verifytoken.js'
const router=express.Router()
router.post('/write',verifytoken,async(req,res,next)=>{
    try{
const newComment=new Comment(req.body)
 await newComment.save()
 res.status(200).json(newComment)
    }
    catch(error){
        next(error)
    }
})
router.post('/:id',verifytoken,async(req,res,next)=>{
    try{
const updateComment= Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
res.status(200).json(updateComment)

    }
    catch(error){
        next(error)
    }
})
router.delete('/:id',verifytoken,async(req,res,next)=>{
    try{
await  Comment.findByIdAndDelete(req.params.id)
res.status(200).json(updateComment)

    }
    catch(error){
        next(error)
    }
})
router.get('/post/:postId',async(req,res,next)=>{
    try{
    const allcomments= await  Comment.find({postId:req.params.postId})
    res.status(200).json(allcomments)
    }
    catch(error){
        next(error)
    }
})
router.get('/user/:userId',async(req,res,next)=>{
    try{
    const allcomments= await  Comment.find({userId:req.params.userId})
    res.status(200).json(allcomments)
    }
    catch(error){
        next(error)
    }
})

export default router