class Sockets {
    constructor( io ) {
        this.io = io;
        this.socketEvents()
    }

    socketEvents(){
        //On Connection
        this.io.on('connection', (socket)=>{
            socket.on('message-to-server', (data)=>{
                console.log(data)
                //Call Event
                this.io.emit('message-from-server', data)
            })
        })
    }

}
module.exports = Sockets
