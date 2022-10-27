![Drizzle & Kaleido](https://github.com/kaleido-io/drizzle-kaleido-box/blob/master/box-img-sm.png "Drizzle & Kaleido")

# Drizzle & Kaleido Truffle Box

This box gives you a boilerplate to get up and running quickly with Drizzle & Truffle on a Kaleido chain.

## Installation

First ensure you are in a new and empty directory.

1. Run the `unbox` command with `npx` and skip to step 3. This will install all necessary dependencies.

```
npx truffle unbox kaleido-io/drizzle-kaleido-box
```

2. Alternatively, you can install Truffle globally and then run the `unbox` command.

```
npm install -g truffle
truffle unbox kaleido-io/drizzle-kaleido-box
```

3. Run the development console. This will instantiate a local chain for you to test that Truffle is working properly.

```
truffle develop
```

4. Ensure that you're able to both compile, test, and finally migrate your contracts to your local chain.

```
compile
test
migrate
```

5. If everything looks good, you can exit the Truffle console with `.exit`.

## Connect to Kaleido

1. In the Kaleido console, navigate to your environment, click on **Security** in the left hand navigation menu, then click on **App Creds**

2. Click **New App Cred** and give it a name and click **Create**. Do not close this window until we have completed the steps below

3. Navigate to where you downloaded the Kaleido Truffle Box in the section above.  Open up the truffle-config.js file in your preferred IDE

4. Back in the Kaleido console, copy the JSON/RPC HTTP endpoint with valid App Creds that's generated in the right hand menu.

5. Paste this full URL into Line 9 where you see 'nodeConnectionURL'. Make sure to keep the URL that you insert inside quotation marks

6. If you are using Quorum in this environment, ensure to uncomment the `type: "quorum"` property on your network object.

## Connect MetaMask to your Kaleido Chain

Detailed instructions to connect your Kaleido network to Metamask can be found [here](https://docs.kaleido.io/developers/smart-contracts/metamask/)

## Start Your React App

1. Open the `/app` directory and start the development server.
```
cd app && npm run start
```

2. The development server will open a browser at `http://localhost:3000` by default.

3. Attempt to change the `Stored Value` of `SimpleStorage` -- you should see the refresh icon until the transaction is confirmed, at which point the `Stored Value` of `SimpleStorage` should automatically update.
