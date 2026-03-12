const User= require('../models/user')

exports.getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).send(err);
    }
}
exports.getUserById=async(req,res)=>{
    try{
    const user= await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json(user);
}catch(err){
    res.status(500).send(err);
}
}
exports.createUser=async(req,res)=>{
    try{
    const {name,email,password}= req.body;
    const user= await User.findOne({email});
    if(user){
        res.status(401).json({message:"user already exist"});
    }
    const data= await User.create({
        name,
        email,
        password
    })
    res.status(200).json(data)
}catch(err){
    res.status(500).send(err)
}
}
exports.updateUser=async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            return res.status(404).json({message:"user not exist"});
        }
        res.status(200).json(user)
    }catch(err){
        res.status(500).send(err);
    }
}
exports.deleteUser=async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"user deleted successfully"})
    }catch(err){
        res.status(500).send(err);
    }
}