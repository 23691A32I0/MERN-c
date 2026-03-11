const express=require('express');
const connectdb=require('./config/db')
const dotenv=require('dotenv')
const {connect}=require('mongoose')
const app=express();
const egRouters=require('./routers/eg.Router')
const userRouters=require('./routers/userRouter')
const todoRouters=require('./routers/todoRouter')
const authRouters=require('./routers/authRouter')
const cors = require('cors');
dotenv.config();
connectdb();
app.use(cors());
app.use(express.json());
app.use(egRouters);
app.use('/api/user',userRouters);
app.use('/api/todo',todoRouters);
app.use('/api/auth',authRouters)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`
    )});

