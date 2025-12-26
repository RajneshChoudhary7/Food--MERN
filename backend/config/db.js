import mongoose from "mongoose"

const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log("database connect nahi ho raha h ")
    }
}

export default connectDb