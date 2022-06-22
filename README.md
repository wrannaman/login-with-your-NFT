# Login With NFTs

![example](./demo.gif)

Building an auth system to allow users to log in using an NFT is a straighforward process.
In many ways it's simpler than dealing with JWTs.

**Read the full post [here](https://saasdeals.io/nft-login)**

# Environment variables.

- add this to a `.env` file after signing up for [Alchemy](https://www.alchemy.com/)

```bash
GOERLI_ALCHEMY_API_URL = "https://eth-goerli.alchemyapi.io/v2/xxx"
MAINNET_ALCHEMY_API_URL = "https://eth-mainnet.alchemyapi.io/v2/xxx"
```

# To Run

```bash
npm run dev
```

## NPM Package

Additionally, here is a [free React HOC to implement NFT login](https://www.npmjs.com/package/nft-login)
