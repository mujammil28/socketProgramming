import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';


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
    
    socket.on('new_message',(message)=>{

        socket.broadcast.emit('send_message', message);

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
})

