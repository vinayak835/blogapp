import express from 'express'
import User from '../models/user.model.js'
import Post from '../models/post.model.js'
import Comment from '../models/comment.model.js'
import verifytoken from '../verifytoken.js'

const router=express.Router()
router.post('/write',verifytoken,async(req,res,next)=>{
    try{
 const newpost= new Post(req.body)
 await newpost.save()
 res.status(200).json(newpost)
        
    }
    catch(error){
    next(error)
    }
    })
    router.post('/:id',verifytoken,async(req,res,next)=>{
        try{
              const updatepost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
              res.status(200).json(updatepost)
        }
        catch(error){
            next(error)
        }
    })
    router.delete('/:id',verifytoken,async(req,res,next)=>{
        try{
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json('post deleted sucessfully')
        }
        catch(error){
            next(error)
        }
    })
router.get('/:id',async(req,res,next)=>{
    try{
     const post= await Post.findById(req.params.id)
     res.status(200).json(post)
    }
    catch(error){
        next(error)

    }
})
router.get('/',async(req,res,next)=>{
    const query=req.query
    try{
        const searchFilter={
            title:{$regex:query.search,$options:"i"}
        }
     const posts= await Post.find(query.search?searchFilter:null)
     res.status(200).json(posts)
    }
    catch(error){
        next(error)

    }
})
router.get('/user/:userId',async(req,res,next)=>{
    try{
     const posts= await Post.find({userId:req.params.userId})
     res.status(200).json(posts)
    }
    catch(error){
        next(error)

    }
})

export default router