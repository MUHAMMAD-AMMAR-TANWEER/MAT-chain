const { exportAllDeclaration } = require('@babel/types');
const Block = require('./block');

const { DIFFICULTY } = require('../config');

describe('Block' , () => {
    let   data , lastBlock , block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);

    });

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('set the `lastHash to match the hash of last Block' , () =>{
        expect(block.lastHash).toEqual(lastBlock.hash); 
    });
    

    it('it generates the hash that matches the difficult', () =>{
        expect(block.hash.substring(0,DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
        console.log(block.toString());
    });




});