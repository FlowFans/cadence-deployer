var EC = require("elliptic").ec
var SHA3 = require("sha3").SHA3
var fcl = require("@onflow/fcl")
const ec = new EC("p256")

const hashMsgHex = msgHex => {
  const sha = new SHA3(256)
  sha.update(Buffer.from(msgHex, "hex"))
  return sha.digest()
}

// 签名
const sign = (privateKey, msgHex) => {
  const key = ec.keyFromPrivate(Buffer.from(privateKey, "hex"))
  const sig = key.sign(hashMsgHex(msgHex))
  const n = 32 // half of signature length?
  const r = sig.r.toArrayLike(Buffer, "be", n)
  const s = sig.s.toArrayLike(Buffer, "be", n)
  return Buffer.concat([r, s]).toString("hex")
}

module.exports = (account = {}) => ({
  ...account,
  tempId: process.env.FLOW_ACCOUNT_ADDRESS,
  addr: process.env.FLOW_ACCOUNT_ADDRESS,
  keyId: Number(process.env.FLOW_ACCOUNT_KEY_ID),
  signingFunction: data => ({
    addr: process.env.FLOW_ACCOUNT_ADDRESS,
    keyId: Number(process.env.FLOW_ACCOUNT_KEY_ID),
    signature: sign(process.env.FLOW_ACCOUNT_PRIVATE_KEY, data.message),
  }),
})
