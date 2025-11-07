import { WebSocketServer } from "ws";
import http from "http";

const server=http.createServer();
const wss=new WebSocketServer({server});


wss.on("connection",(socket)=>{
    console.log("client connected");

    socket.on('message',(msg)=>{
        console.log("received",msg.toString());

        wss.clients.forEach(client=>{
            if(client.readyState===client.OPEN){

                client.send(msg.toString());
                               
            }
        });
    });

    socket.on('close',()=>{
        console.log("socket disconnected");
    });
});


server.listen(3000,()=>{
    console.log("WebSocket server running on port 3000");
});