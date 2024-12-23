import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import { dbConnect } from './config.js';

import {chatModel} from './chat.schema.js'

const app=express();

const server=http.createServer(app);

const io= new Server(server, {

    cors:{
        origin:"*",
        methods:["GET","POST"],
    }
});

 io.on('connection',(socket)=>{

 console.log("socket connection is established");
    
        socket.on("join",(data)=>{

            socket.userName=data

            })

    socket.on('new_message',(message)=>{

        let userDetail={
            userName:socket.userName,
            message:message,
        }

        const chatDataBase= new chatModel({
                userName:socket.userName,
                message:message,
                dateTime:new Date(),

        })

            chatDataBase.save();

        socket.broadcast.emit('send_message', userDetail);

    })

    socket.on('disconnect',()=>{

        console.log("socket connection is disconnected");
    })

})


app.get('/',(req,res)=>{

    res.status(200).send("connection is established on :")
})


server.listen(3000,(req,res)=>{
    console.log("Server is running on port: 3000");
    dbConnect();
    
})