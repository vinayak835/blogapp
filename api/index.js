import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
dotenv.config()
const app=express()
app.use(express.json())
const Dbconnect=async()=>{
try{
     await mongoose.connect(process.env.MONGO)
     console.log('connected')
}
catch(error){
    console.log(error)
}
}
app.listen(process.env.PORT,()=>{
    Dbconnect()
    console.log('srver is running on '+process.env.PORT)
})
app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"server not found";
    const success=false;
    return res.status(statusCode).json({
        statusCode,message,success
    })
})