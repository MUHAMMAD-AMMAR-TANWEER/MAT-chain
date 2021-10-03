const Block = require ('./blockchain/block');

// const block  =  new Block("Ammar","Ace","King","Emperor");
// console.log(block.toString());
// console.log(Block.genesis().toString());


const fooBlock = Block.mineBlock(Block.genesis(),"fooo");
console.log(fooBlock.toString());