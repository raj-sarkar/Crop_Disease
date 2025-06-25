import mongoose from "mongoose"

export const connectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connected',connect.connection.name,connect.connection.host)
    } catch (err) {
        console.log('Database connection error')
    }
}