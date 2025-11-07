import { WebSocketServer } from "ws";
import http from "http";

const server=http.createServer();
const wss=new WebSocketServer({server});


wss.on("connection",(socket)=>{
    console.log("client connected");
})

server.listen(3000,()=>{
    console.log("WebSocket server running on port 3000");
});