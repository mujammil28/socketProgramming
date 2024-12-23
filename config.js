import mongoose from "mongoose";


export const dbConnect=async()=>{

try{    await mongoose.connect("mongodb://localhost:27017/ChatApp");
    console.log("Database Connected...");
}catch(err){

    console.log("Error in database!!!");
}    

}


