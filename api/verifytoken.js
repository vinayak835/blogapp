import jwt from 'jsonwebtoken'
const verifytoken=(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json('you are not authenticated')
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
        if(err){
            return res.status(403).json('token is not valid')
    }
    req.userId=data.id
    console.log('passed')
    next()
        
    })

}
export default verifytoken