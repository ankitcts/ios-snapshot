"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = exports.wsSocket = void 0;
const ws_1 = require("ws");
exports.wsSocket = new ws_1.WebSocketServer({
    noServer: true,
    path: process.env.subscribeUpdate
});
/**
 *  Publish
 * @param req
 */
const publish = (req) => {
    exports.wsSocket.clients.forEach((ws) => {
        ws.send(JSON.stringify({
            time: Date.now(),
            message: 'Post call received'
        }));
    });
};
exports.publish = publish;
function default_1(server) {
    exports.wsSocket.on('connection', function connection(ws) {
        ws.on('message', function message(data) {
            console.log('received: %s', data);
        });
        ws.send('something');
    });
    server.on("upgrade", (request, socket, head) => {
        exports.wsSocket.handleUpgrade(request, socket, head, (websocket) => {
            exports.wsSocket.emit("connection", websocket, request);
        });
    });
}
exports.default = default_1;
