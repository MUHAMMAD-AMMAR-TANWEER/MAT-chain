const express  = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');

const HTTP_PORT = process.env.HTTP_PORT || 3001;//it allows to run on 3001
//but when multiple instance run we use env variable

const app = express();

app.use(bodyParser.json());
const bc = new Blockchain();
//get app

app.get('/blocks' , (req, res) => {
    res.json(bc.chain);
});


//post request

app.post('/mine',(req,res) => {
    const block = bc.addBlock(req.body.data);

    console.log(`New block has been added: ${block.toString()} `);
    res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`));