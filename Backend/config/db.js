const mongoose= require('mongoose');
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully👍")
    } catch(err){
        console.log(err);
    }
}
module.exports=connectdb;