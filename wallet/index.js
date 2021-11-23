const ChainUtil = require('../chain-utill');

const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair(); //generate public private key pair
        this.publicKey = this.keyPair.getPublic().encode('hex');


    }

    toString() {
        return `Wallet -
        publicKey: ${this.publicKey.toString()}
        balance  : ${this.balance.toString()}`
    }
}

module.exports = Wallet;