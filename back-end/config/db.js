import mongoose from "mongoose";


export const connectDB = async()=>{
    try {
        
        await mongoose.connect("mongodb://localhost:27017/food-del",{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
            console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
    }
}
    // mongodb+srv://Jegan:%40Jegan123@cluster0.lhjs2jt.mongodb.net/