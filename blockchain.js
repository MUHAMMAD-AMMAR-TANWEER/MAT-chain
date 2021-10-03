const Block  = require('./block');

//This will hold blockchain 

class Blockchain {
    constructor () {
        this.chain = [Block.genesis];
    }

    addBlock (data) {

        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        this.chain.push(block);


        return block;

    }
}

module.exports = Blockchain;