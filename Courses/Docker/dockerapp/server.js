'use strict'
const express = require('express')

//Constants
const port = 8080;
const host = 'Localhost';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Docker World');
});

app.listen(port, host);
console.log(`Runnig on http://${host}:${port}`);