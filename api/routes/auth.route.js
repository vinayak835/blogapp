import express from 'express'
const router=express.Router()
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import mongoose from 'mongoose'
import errorHandler from '../error/error.js'
import jwt from 'jsonwebtoken'

router.post('/sign-up',async(req,res,next)=>{
    try{
      const{username,email,password}=req.body
      const hashedpassword=bcryptjs.hashSync(password,10)
      const newUser=new User({username,email,password:hashedpassword})
      await newUser.save()
       res.status(201).json(newUser)
    }
    catch(error){
    next(error)
    }
})
router.post('/sign-in',async(req,res,next)=>{
  try{
   const{email,password}=req.body
    const validuser=await User.findOne({email:email})
   if(!validuser){
    next(errorHandler(401,'user not found'))
    return
   }
   const validpassword=bcryptjs.compareSync(password,validuser.password)
   if(!validpassword){
    next(errorHandler(404,'Wrong credentaial'))
    return
   }
   const{password:pass,...info}=validuser._doc
   const token=jwt.sign({id:validuser._id},process.env.JWT_SECRET,{expiresIn:"3d"})
   res.cookie('token',token).status(200).json(info)
  }
  catch(error){
    next(error)
  }
})
router.post('/logout',async(req,res,next)=>{
  try{
  res.clearCookie('token',{sameSite:'none',secure:true}).status(200).send('user logged out successfully')
  }
  catch(error){
    next(error)
  }
})

export default router