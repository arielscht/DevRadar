const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

mongoose.connect('mongodb+srv://ArielSCH:B8D94D790FF5@cluster0-r7s8k.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const server = http.Server(app);

setupWebsocket(server);

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode).json(error);
})

server.listen(3333);

