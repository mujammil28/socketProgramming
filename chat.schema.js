import mongoose from "mongoose";

const chatSchema=mongoose.Schema({

    userName:String,
    message:String,
    dateTime:Date,
})

export const chatModel=mongoose.model("Chat",chatSchema);