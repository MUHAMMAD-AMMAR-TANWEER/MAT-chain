const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(','): [];

//we can change p2p ports like http ports 
//$ HTTP_PORT = 3002 ; P2P_PORT = 5003 ; PEERS = ws://localhost:5002

class P2pServer {
    constructor (blockchain){
        this.blockchain = blockchain;
        this.sockets = [];//set number of sockets empty error
    }
    listen () {// this class starts the server
        const server = new Websocket.Server({port: P2P_PORT});//created server
        server.on("connection", socket => this.connectSocket(socket));//listen incoming messages
        console.log(`Listening to the peer-to-peer server at port: ${P2P_PORT}`);
    }

    connectSocket(socket){//push connected socket to sockets array
        this.sockets.push(socket);
        console.log("Socket Connected");
    }
}