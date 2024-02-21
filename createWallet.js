// Import necessary modules
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');

// Asynchronous function to create a new wallet
async function createWallet(walletName) {
    // Generates a new mnemonic phrase.
    const mnemonic = bip39.generateMnemonic();
    const seed = await bip39.mnemonicToSeed(mnemonic);

    // Specifies the network: bitcoin.testnet for testnet
    const network = bitcoin.networks.testnet;
    const root = bitcoin.bip32.fromSeed(seed, network);

    // Derives the first account based on BIP44 path
    const path = "m/44'/1'/0'/0/0"; // Testnet path
    const account = root.derivePath(path);
    const { address } = bitcoin.payments.p2pkh({ pubkey: account.publicKey, network });

    // Saving the wallet data to a file
    const walletData = {
        mnemonic,
        address: address,
    };
    fs.writeFileSync(`${walletName}.json`, JSON.stringify(walletData, null, 2));

    // Display success message with wallet details
    console.log(`Wallet created successfully.\nAddress: ${address}\nMnemonic: ${mnemonic}`);
}

// Export the createWallet function for use in other modules
module.exports = createWallet;
