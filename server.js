import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';


const app=express();

const server=http.createServer(app);

const io= new Server(server, {

    cors:{

        origin:'*',
        methods:["GET","POST"],

    }
});


io.on('connection',(socket)=>{

    console.log("socket connection is established");

    socket.on('disconnect',()=>{
        
        console.log("socket connection is disconnected");
    })

})


server.listen(3000,()=>{

    console.log("Server is running on port: 3000");
})

