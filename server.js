import { WebSocketServer } from "ws";
import http from "http";

const server=http.createServer();
const wss=new WebSocketServer({server});


