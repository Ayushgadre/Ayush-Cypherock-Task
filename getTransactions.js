// Import the axios library for making HTTP requests
const axios = require("axios");

// Load environment variables from a .env file
require("dotenv").config();

// Asynchronous function to get transactions for a Bitcoin wallet
async function getTransactions(walletAddress) {
    try {
        // Make a GET request to the BlockCypher API to fetch transactions
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}?token=${process.env.API_KEY}`);

        // Display header for transactions
        console.log(`Transactions for ${walletAddress}:`);

        // Display transactions or a message if no transactions found
        console.log(response.data.txrefs || "No transactions found.");
    } catch (error) {
        // Handle errors if the API request fails
        console.error("Error fetching transactions:", error.message);
    }
}

// Export the getTransactions function for use in other modules
module.exports = getTransactions;
