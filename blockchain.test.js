const Blockchain  = require('./blockchain');
const Block = require('./block');


describe ('Blockchain',() => {
    let bc,bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('starts from genesis block',()=>{
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it("It adds a block", ()=> {
        const data = "foo";
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

    it("validates the correct chain" , () =>{
        bc2.addBlock("foo");
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
    
    it("invalidates with corrupt genesis block data" , () => {
        bc2.chain[0].data = "Bad data";
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it("invalidates the corrupt chain " , () => {
        bc2.addBlock("foo");
        bc2.chain[1].data = "Not foo";
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

     
});