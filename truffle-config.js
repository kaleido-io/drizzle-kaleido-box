const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry');
const path = require('path');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'app/src/contracts'),
  networks: {
    development: {
      provider: () => {
        // JSON/RPC connection URL including the app creds:
        // eg: https://[username]:[password]@[rpc-endpoint-hostname]
        const connectionURL = 'nodeConnectionURL';
        return new HTTPProviderRateLimitRetry(connectionURL, 100000);
      },
      network_id: '*', // Match any network id
      gasPrice: 0,
      gas: 4500000,
      disableConfirmationListener: true, // generates thousands of eth_getBlockByNumber calls
      timeoutBlocks: 3,
      deploymentPollingInterval: 5000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
};
