import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  contracts: [SimpleStorage],
  events: {
    SimpleStorage: ["StorageSet"],
  },
  polls: {
    accounts: 1500
  }
};

export default options;
