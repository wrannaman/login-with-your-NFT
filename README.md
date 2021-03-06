# Login With NFTs

![example](./public/demo.gif)

**Read the full post [here](https://saasdeals.io/nft-login)**

Building an auth system to allow users to log in using an NFT is a straighforward process.
In many ways it's simpler than dealing with JWTs.

The repo is a nextjs app that connects to a metamask wallet connected to Goerli test net or the Ethereum Mainnet.

# Environment variables.

- add this to a `.env` file after signing up for [Alchemy](https://www.alchemy.com/)

```bash
GOERLI_ALCHEMY_API_URL = "https://eth-goerli.alchemyapi.io/v2/xxx"
MAINNET_ALCHEMY_API_URL = "https://eth-mainnet.alchemyapi.io/v2/xxx"
```

# To Run

```bash
# will start up on localhost:3000
npm run dev
```

## NPM Package

Additionally, here is a [React HOC to implement NFT login](https://www.npmjs.com/package/nft-login)
