
import { Server } from 'http';
import { WebSocketServer } from 'ws';
import { Request } from 'express';

export const wsSocket = new WebSocketServer({
  noServer: true,
  path: process.env.subscribeUpdate
});

/**
 *  Publish 
 * @param req 
 */
export const publish = (req: Request) => {
  wsSocket.clients.forEach((ws) => {
      ws.send(JSON.stringify({
        time: Date.now(),
        message: 'Post call received'
      }));
  })
}

export default function (server: Server) {
  wsSocket.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('something');
  });

  server.on("upgrade", (request, socket, head) => {
    wsSocket.handleUpgrade(request, socket, head, (websocket) => {
      wsSocket.emit("connection", websocket, request);
    });
  });

}