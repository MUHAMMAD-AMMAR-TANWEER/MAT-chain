const Block  = require('./block');

//This will hold blockchain 

class Blockchain {
    constructor () {
        this.chain = [Block.genesis()];
    }

    addBlock (data) {

        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        this.chain.push(block);


        return block;

    }
//chain validation
    isValidChain (chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false; //comparing first element of chain with genesis 

        for (let i = 1; i<chain.length; i++) { //checking all blocks and there previous block hash whether they match
            const block = chain[i];
            const lastBlock = chain[i-1];

            if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)){//also check wheter the generation of hash is not correct or it is temper
                return false;
            }
        }
        return true;
    }

    replaceChain (newChain) {//adding functionality to support multiple colaborators
        if (newChain.length <= this.chain.length){
            console.log("chain is no longer then the current chain");
            return;
        }

        else if(!this.isValidChain(newChain)){
            console.log("this chain is not valid");
        };

        
        console.log("Replacing block chain with new chain");
        this.chain = newChain;
    };
}

module.exports = Blockchain;