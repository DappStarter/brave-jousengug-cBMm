require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove dash still hole hover desert flush gate'; 
let testAccounts = [
"0x7260828e39fb16402e6e2c473edb5a740ec7b3cc9a3e0faca5a81093bf96c023",
"0x979e640db73fe32544e53ff4987e13f2dac69705752e34c9d68ef1b6ce6e1cc4",
"0xe5f0097d10e53bc8d0ad1b6601cdf7166f73b12ba11c83715472703edb42a320",
"0xf3cd442770074b7d77ea25c5fb35f372f580f751199bfd257a2ee80284344d70",
"0xba5fcb6e809d4339cbd1ee1c05244c503c15801d9a754d251f45bef0497c396f",
"0x967d0957c7320debd5493ad7da8e7eac9417086eff0fcb98cab527f1790ddc86",
"0xe37d1e8475d6f0b1bea2afc4ad57e7b22ed8f34c5fe4ffe8bf1c353796c17b3e",
"0x1dfeb29bf0363b9f3dda65bb87a57a7e1c6ebb9e725b3de39dc3ab5ad040b33b",
"0x453f8a1134e8569342f5895160c1f247a113bc71ec108d78aeedf9a5f214af13",
"0xda482ed292d7550693a09ad394b64cbbf0b2a17bd596c58d422a0a8bbd429db6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

