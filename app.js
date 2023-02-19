// packes
const express = require('express');
const config = require('config');


// app configuration 
const app = express();
const controller = require('./controller/logic/phones.controller');
const controllersio = require('./controller/logic/sio.controller');
// port configuration
const port = config.get("server-port")

app.get('/', (req, res) => {
    res.send('api rest of cell phones and operating systems');
})

app.get('/phones', (req, res) => {
   controller.getAll(req, res);
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})