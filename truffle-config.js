const path = require("path");
var Web3 = require('web3');

module.exports = {
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      provider: () => {
        const connectionURL = 'nodeConnectionURL'; // replace nodeConnectionURL with JSON/RPC URL with valid App Creds
        return new Web3.providers.HttpProvider({connectionURL}, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  compilers: {
    solc: {
      version: "0.5.0",
    }
  }
};
