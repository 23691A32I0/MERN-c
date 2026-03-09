const express=require('express');
const connectdb=require('./config/db')
const dotenv=require('dotenv')
const {connect}=require('mongoose')
const app=express();
const egRouters=require('./routers/eg.Router')
const userRouters=require('./routers/userRouter')
dotenv.config();
connectdb();
app.use(express.json());
app.use(egRouters);
app.use('/api/user',userRouters);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`
    )});

