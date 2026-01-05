import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import connectDb  from './config/db.js'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
const app = express()
const port = process.env.PORT || 5000 

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.get('/',(req,res)=>{
    res.send("server is running ")
})

app.listen(port,()=>{
    connectDb()
    console.log("server is started at"+port)
})