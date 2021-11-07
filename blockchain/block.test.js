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
        expect(block.hash.substring(0,block.difficulty)).toEqual('0'.repeat(block.difficulty));
        console.log(block.toString());
    });

    it('lowers for the slowly mined blocks', () =>{
        expect(Block.adjustDifficulty(block, block.timestamp+360000)).toEqual(block.difficulty -1 );
    })
    it('raises the difficulty of higly mined blocks', () => {
        expect(Block.adjustDifficulty(block,block.timestamp +1)).toEqual(block.difficulty +1);
    });



});