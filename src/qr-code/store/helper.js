export const createURL = ({instance, userValue}) => {
    if(!userValue) return "";
    // const _param  = userValue ?  "?" : "&";
    return userValue + "&"+"_session-cookie="+instance; 
}

const currenthost = window.location.host;

export const connectToServer = async (url = `ws://${currenthost}/subscribeUpdate`) => {
    const ws = new WebSocket(url);
    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            if(ws.readyState === 1) {
                clearInterval(timer)
                resolve(ws);
            }
        }, 10);
    });
}

export const send = (socket, data) => socket.send(JSON.stringify(data));
