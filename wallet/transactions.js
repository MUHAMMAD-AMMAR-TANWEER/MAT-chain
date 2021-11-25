const ChainUtil = require('../chain-utill');

class Transaction {
    constructor() {
        this.id = ChainUtil.id();
        this.input = null;
        this.outpur = [];
    }

    static newTransaction(senderWallet, recepient, amount) {
        const transaction = new this();

        if (amount > senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`); // to check the sender has the given amount ;
            return;
        }

        transaction.output.push(...[
            { amount: senderWallet.balance - amount, address: senderWallet.publicKey },
            { amount, address: recepient }
        ])

        return transaction;

    }
}

module.exports = Transaction;