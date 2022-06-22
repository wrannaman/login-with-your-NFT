require("dotenv").config()
const ethUtil = require("ethereumjs-util");

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const GOERLI_ALCHEMY_API_URL = process.env.GOERLI_ALCHEMY_API_URL;
const MAINNET_ALCHEMY_API_URL = process.env.MAINNET_ALCHEMY_API_URL;

const handler = async (req, res) => {
  try {
    const { key, wallet, chain, signature } = req.query
    let { nonce, contracts } = req.query
    if (!chain || !wallet || !signature || !nonce) return res.status(400).json({ error: 'invalid params' });
    let web3 = null

    // set up alchemy connection
    if (chain === '0x1') {
      web3 = createAlchemyWeb3(MAINNET_ALCHEMY_API_URL)
    } else if (chain === '0x5') {
      web3 = createAlchemyWeb3(GOERLI_ALCHEMY_API_URL)
    } else {
      return res.json({ error: 'Chain not supported' })
    }

    // Make sure the signature is valid
    nonce = "\x19Ethereum Signed Message:\n" + nonce.length + nonce
    nonce = ethUtil.keccak(Buffer.from(nonce, "utf-8"))
    const { v, r, s } = ethUtil.fromRpcSig(signature)
    const pubKey = ethUtil.ecrecover(ethUtil.toBuffer(nonce), v, r, s)
    const addrBuf = ethUtil.pubToAddress(pubKey)
    const addr = ethUtil.bufferToHex(addrBuf)
    console.log("~ addr", addr)

    // fetch the nfts
    const _nfts = await web3.alchemy.getNfts({
      owner: addr
    })

    // match nfts to contract addresses (if any)
    const nfts = []
    _nfts.ownedNfts.forEach(nft => {
      if (!contracts) {
        nfts.push(nft)
      } else {
        if (contracts.toLowerCase().split(',').indexOf(nft.contract.address.toLowerCase()) !== -1) {
          nfts.push(nft)
        }
      }
    })

    return res.json({ success: true, nfts, totalCount: _nfts.totalCount })
  } catch (e) {
    console.error('e ', e)
    return res.json({ error: 'Error' });
  }
}

export default handler