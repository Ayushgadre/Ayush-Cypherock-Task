// Import the axios library for making HTTP requests
const axios = require("axios");

// Load environment variables from a .env file
require("dotenv").config();

// Asynchronous function to get the balance of a Bitcoin wallet
async function getBalance(walletAddress) {
    try {
        // Make a GET request to the BlockCypher API to fetch the balance
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${walletAddress}/balance?token=${process.env.API_KEY}`);

        // Display the balance information
        console.log(`Balance for ${walletAddress}: ${response.data.balance} dollars`);
    } catch (error) {
        // Handle errors if the API request fails
        console.error("Error fetching balance:", error.message);
    }
}

// Export the getBalance function for use in other modules
module.exports = getBalance;
