import express from "express"
import dotenv from 'dotenv'
import authRouter from "./routes/auth.route.js"
import {connectDb} from "./lib/dbConnection.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import cropRouter from './routes/crop.route.js'

dotenv.config()
const app=express()
const port=process.env.PORT || 5000

connectDb()
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api/auth',authRouter)
app.use('/api/crop',cropRouter)

app.listen(port,()=>{
    console.log('Server is listening to',port)
})

