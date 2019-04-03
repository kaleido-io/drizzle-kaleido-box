const path = require("path");
var Web3 = require('web3');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      provider: () => {
        const appCred = 'yourappcred'; // from application credential widget
        const connectionURL = 'nodeConnectionURL'; // without protocol (https://)
        return new Web3.providers.HttpProvider(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  }
};
