//This will be used for cryptography
//sec for standard of efficient cryptography p stands for prime 256 == 256 bit prime number or 32 byte k kobalt scientist name and 1 is first implmentation
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class ChainUtil {
    static genKeyPair() {
        return ec.genKeyPair();

    }
}

module.exports = ChainUtil;