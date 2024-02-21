// Import necessary modules
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');

// Function to generate a new Bitcoin address for an existing wallet
function generateAddress(walletName) {
    // Read wallet data from the file
    const walletData = JSON.parse(fs.readFileSync(`${walletName}.json`));

    // Convert mnemonic to seed and create a root node
    const seed = bip39.mnemonicToSeedSync(walletData.mnemonic);
    const root = bitcoin.bip32.fromSeed(seed, bitcoin.networks.testnet);

    // Assuming you increment an index to generate a new address
    const nextIndex = (walletData.index || 0) + 1;

    // Derive the account based on BIP44 path with the incremented index
    const account = root.derivePath(`m/44'/1'/0'/0/${nextIndex}`);
    const { address } = bitcoin.payments.p2pkh({ pubkey: account.publicKey, network: bitcoin.networks.testnet });

    // Display the new Bitcoin address
    console.log(`New Bitcoin address: ${address}`);

    // Update the wallet file with the new index
    walletData.index = nextIndex;
    fs.writeFileSync(`${walletName}.json`, JSON.stringify(walletData, null, 2));
}

// Export the generateAddress function for use in other modules
module.exports = generateAddress;
