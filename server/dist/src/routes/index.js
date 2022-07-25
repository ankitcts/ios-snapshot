"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websockets_1 = require("../lib/websockets");
function default_1(app) {
    app.post('/update', (req, res) => {
        console.log('post call received');
        // publish to web socket
        (0, websockets_1.publish)(req);
        ;
        res.send('Post Call received');
    });
    app.get('/check', (req, res) => {
        res.send('get Call received');
    });
}
exports.default = default_1;
