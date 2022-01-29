require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rescue magnet coffee kidney knee slot gesture'; 
let testAccounts = [
"0x53c2728ce82e10b04630a49e5f9f6928e67bfabc36406e367ceaebf11f087657",
"0x88858b492fd752d90ad638c477b630b184a81c2495d1d119c66bc97dc95609fa",
"0x4923ffbc20e417552d6bde7ee3eeb9281218ff0dd99179dfd83531c58145ec93",
"0xd53e5135ed36495fb70a83e8e1666206243e03f660f1e91741aa2368719f2c7f",
"0x8cbc6ffc2a7d82b9a84f8c1a562e898a5ff988ffdca74985154ff0f3c12ff418",
"0xcd580d886b6842231ff3874b67e20a3b4a34407f80bad99aa631439e63bf7271",
"0xf1573975f1d91e0f8c2ea2fc72a3ad098b3f8771384b418b46d9d8a79a127dea",
"0xadb1e8b71c5911d8080cb132f0698f3caa5df0e5ddb47585c8b2c2b0494cb55f",
"0x708223eb39cdd4875a3923644df981f0c81efd9f0be4a37f7bf9321973f8fcde",
"0xd381e3e93e2bef5271599d78825e1e960c59f91119e330382f113db582a2bc3d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


