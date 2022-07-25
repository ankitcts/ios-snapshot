import { Express, Request, Response } from 'express';
import {publish} from '../lib/websockets';



export default function(app: Express) {
    app.post('/update', (req: Request, res: Response) => {
        console.log('post call received')

        // publish to web socket
        publish(req);;
        res.send('Post Call received');
    })

}