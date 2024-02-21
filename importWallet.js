// Import necessary modules
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');

// Asynchronous function to import a wallet using a mnemonic
async function importWallet(walletName, mnemonic) {
    // Validate the provided mnemonic
    if (!bip39.validateMnemonic(mnemonic)) {
        console.error("Invalid mnemonic.");
        return;
    }

    // Convert mnemonic to seed and create a root node
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const root = bitcoin.bip32.fromSeed(seed, bitcoin.networks.testnet);

    // Derive the account based on BIP44 path
    const account = root.derivePath("m/44'/1'/0'/0/0");
    const { address } = bitcoin.payments.p2pkh({ pubkey: account.publicKey, network: bitcoin.networks.testnet });

    // Save wallet data to a new file
    fs.writeFileSync(`${walletName}-imported.json`, JSON.stringify({ mnemonic, address, transactions: [] }, null, 2));

    // Display success message with imported wallet details
    console.log(`Wallet '${walletName}' imported successfully.`);
    console.log(`Address: ${address}`);
}

// Export the importWallet function for use in other modules
module.exports = importWallet;
