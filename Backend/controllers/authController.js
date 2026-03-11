const Auth=require('../models/auth')
const bcrypt=require('bcryptjs')
exports.register=async(req,res)=>{
    
    try{
        const{name,email,password}=req.body;
        const exist= await Auth.findOne({email})
    if(exist){
        return res.status(400).json({message:"user already exist"})
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user= await Auth.create({
        name,email,password:hashedPassword
    })
    res.status(201).json({message:"user created successfully",user})
    }
    catch{
        res.status(500).json(err)
    }
}
exports.login=async(req,res)=>{
    try{
         const{email,password}=req.body
         const user=await Auth.findOne({email})
         if(!user){
            res.status(401).json({message:"user not found"})
         }
         const match =await bcrypt.compare(password,user.password)
         if(!match){
            return res.status(300).json({message:"invalid"})
         }
         res.status(200).json({message:"login successful"},user)
    }catch(err){
        res.status(500).json(err)
    }
}