exports.getUsers=(req,res)=>{
    res.send("get all users");
}
exports.getUserById=(req,res)=>{
    res.send("get user by id")
}
exports.createUser=(req,res)=>{
    res.json({message:"user created successfully"})
}
exports.updateUser=(req,res)=>{
    res.json({message:"user updated successfully"})
}
exports.deleteUser=(req,res)=>{
    res.json({message:"user deleted successfully"})
}