
# Bitcoin Wallet CLI Tool

This CLI tool is designed to manage Bitcoin wallets on the testnet, providing functionalities such as creating and importing wallets using BIP39 mnemonics, listing all managed wallets, fetching wallet balances, listing transactions, and generating new addresses.

## Features

**Create Wallet**: Generate a new BIP39 mnemonic wallet.
**Import Wallet**: Import an existing wallet using a BIP39 mnemonic.
**List Wallets**: Display all wallets managed by the tool.
**Get Balance**: Fetch the balance of a specific wallet.
**List Transactions**: Show transaction history for a specific wallet.
**Generate Address**: Create a new address for a specific wallet.

## Installation
npm install
Usage
To start the tool, run:
node app.js

Follow the on-screen prompts to interact with the tool. Choose the action you wish to perform and provide any required information as prompted.

## Dependencies

This project uses several dependencies to manage Bitcoin wallet functionalities and environment configurations. 
Below is a detailed overview:

**axios**: A promise-based HTTP client for the browser and Node.js. It's used in this project for making HTTP requests to blockchain APIs to fetch wallet balances and transaction histories.

**bitcoinjs-lib**: A JavaScript Bitcoin library for Node.js and browsers. It's used for all Bitcoin operations, such as creating and importing wallets, generating addresses, and managing keys. It supports mainnet and testnet for Bitcoin.

**bip39**: A JavaScript implementation of the Bitcoin Improvement Proposal (BIP) 39 standard for mnemonic codes or mnemonic sentence. It's used for generating the mnemonic phrases that are crucial for recovering Bitcoin wallets. This library helps in creating a new wallet and importing existing wallets using mnemonic phrases.

**dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env. This project uses dotenv to manage sensitive information such as API keys securely, ensuring they are not hard-coded into the project's source code.

**readline (Built-in Node.js Module)**: The readline module provides a way of reading a line from an input stream (such as the terminal) one line at a time. In this project, readline is used to interact with the user through the command line, allowing the user to choose and execute wallet operations. Note that readline is part of the Node.js standard library and does not require installation via npm.

## Installing Dependencies
To install the required dependencies (except for readline, which is built-in), run the following command in your project directory:

npm install axios bitcoinjs-lib bip39 dotenv

This command will install the versions of the packages that are compatible with the project as defined in your package.json file.

## Configuration

Create a .env file in the root directory of the project and add BlockCypher API key:


## Security
This tool stores mnemonic phrases and wallet information in plain text files. It is designed for educational purposes and testing with the Bitcoin testnet. Do not use this tool with real funds or on the mainnet.
