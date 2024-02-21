// Import necessary modules and files
const readline = require('readline');
const createWallet = require('./createWallet');
const importWallet = require('./importWallet');
const listWallets = require('./listWallets');
const getBalance = require('./getBalance');
const getTransactions = require('./getTransactions');
const generateAddress = require('./generateAddress');

// Load environment variables from a .env file
require('dotenv').config();

// Display a message indicating that the script is running
console.log('Script is running...');

// Create a readline interface to handle user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the main function for the CLI tool
const main = () => {
  // Display the main menu options
  console.log("\nBitcoin Wallet CLI Tool");
  console.log("1. Create a new wallet");
  console.log("2. Import a wallet using a mnemonic");
  console.log("3. List all wallets");
  console.log("4. Get the balance of a wallet");
  console.log("5. List transactions of a wallet");
  console.log("6. Generate a new address for a wallet");
  console.log("0. Exit");

  // Prompt the user to choose an option
  rl.question("\nChoose an option: ", async (option) => {
    // Process the user's choice
    switch (option) {
      case '1':
        // Option 1: Create a new wallet
        const walletName = await question("Enter a name for your new wallet: ");
        await createWallet(walletName);
        break;

      case '2':
        // Option 2: Import a wallet using a mnemonic
        const importName = await question('Enter a name for your imported wallet: ');
        const mnemonic = await question('Enter your mnemonic: ');
        await importWallet(importName, mnemonic);
        break;

      case '3':
        // Option 3: List all wallets
        listWallets();
        break;

      case '4':
        // Option 4: Get the balance of a wallet
        const addressForBalance = await question('Enter the wallet address to get balance: ');
        await getBalance(addressForBalance);
        break;

      case '5':
        // Option 5: List transactions of a wallet
        const addressForTransactions = await question('Enter the wallet address to list transactions: ');
        await getTransactions(addressForTransactions);
        break;

      case '6':
        // Option 6: Generate a new address for a wallet
        const walletNameForNewAddress = await question('Enter the wallet name to generate a new address: ');
        generateAddress(walletNameForNewAddress);
        break;

      case '0':
        // Option 0: Exit the program
        console.log("Exiting...");
        rl.close();
        return;

      default:
        // Invalid option: Ask the user to try again
        console.log("Invalid option. Please try again.");
    }

    // Re-display the menu after a delay
    setTimeout(main, 1000);
  });
};

// Define a helper function to ask a question and return a promise
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Call the main function to start the CLI tool
main();
