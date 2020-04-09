import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.113:3333', {
    autoConnect: false,
})

function subscriteToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };

    socket.connect();

}

function disconnect() {
    if(socket.connected) {
        socket.disconnect;
    }
}

export {
    connect,
    disconnect,
    subscriteToNewDevs
}