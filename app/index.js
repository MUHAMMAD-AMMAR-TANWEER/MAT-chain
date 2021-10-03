const express  = require('express');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;//it allows to run on 3001
//but when multiple instance run we use env variable

const app = express();
const bc = new Blockchain();
//get app

app.get('/blocks' , (req, res) => {
    res.json(bc.chain);
});

app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`));