const Todo=require('../models/todo')
exports.createTodo=async(req,res)=>{
    try{
        const {task}= req.body;
        const todo=await Todo.create({task});
        res.status(202).json(todo);
    }catch(err){
        res.status(500).send(err);
}
}
exports.getTodo=async(req,res)=>{
    try{
        const todos= await Todo.find();
        res.status(201).json(todos);
    }catch(err){
        res.status(500).send(err);
}
}
exports.updateTodo=async(req,res)=>{
    try{
        const todo= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!todo){
            return res.status(404).json({message:"todo not found"});
        }
        res.status(201).json(todo);
    }catch(err){
        res.status(500).send(err);
}
}
exports.deleteTodo=async(req,res)=>{
    try{
        const todo= await Todo.findByIdAndDelete(req.params.id);
        if(!todo){
            return res.status(404).json({message:"todo not found"});
        }
        res.status(201).json({message:"todo deteted successfully"});
    }catch(err){
        res.status(500).send(err);
}
}
