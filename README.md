# Flow 网络

Flow 的网络节点配置信息，可用于 SDK 和客户端

- Testnet: `access.devnet.nodes.onflow.org:9000`

- Mainnet: `access.mainnet.nodes.onflow.org:9000`

---

区块链浏览器：

- [Flowscan  (主网)](https://flowscan.org/): `https://flowscan.org/`

- [Flow-bigdipper](https://flow.bigdipper.live/): `https://flowscan.org/`

---

查看合约：

- Mainnet
```
https://flow-view-source.com/mainnet/account/0x1654653399040a61
```
`0x1654653399040a61` 换成自己的主网地址
 

- Testnet
```
https://flow-view-source.com/testnet/account/0x64ce437a3838c89d
```
`0x64ce437a3838c89d` 换成自己的测试网地址



# Cadence 合约部署示例


- ts 

Cadence 合约部署的一种方式, [详细内容](./ts/README.md)

- js 

Cadence 合约部署的一种方式，[详细内容](./js/README.md)

- go

Cadence 合约部署的一种方式，[详细内容](./go/README.md)






# Flow 核心合约

Flow 依赖于一组核心合约，这些合约定义了Flow协议的关键部分。

这些合同控制以下内容：

- 标准同质化代币（对标以太坊 ERC-20）

- 非同质化代币

- 默认代币（FlowToken）

- 支付账户，交易和仓储费

- 质押和委派（FlowIDTableStaking）

- 代币锁仓（LockedTokens）




## 标准同质化代币

- [FungibleToken.cdc 源码](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleToken.cdc)


- Emulator	`0xee82856bf20e2aa6`
- Testnet	`0x9a0766d93b6608b7`
- Mainnet	`0xf233dcee88fe0abe`


## 非同质化代币

- [NonFungibleToken.cdc 源码](https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc)


- Testnet	`0x631e88ae7f1d7c20`
- Mainnet	`0x1d7e57aa55817448`



## 默认代币（FlowToken）

- [FlowToken.cdc 源码](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowToken.cdc)


- Emulator	`0x0ae53cb6e3f42a79`
- Testnet	`0x7e60df042a9c0868`
- Mainnet	`0x1654653399040a61`
- FT.01	交易Flow    [flowToken/transfer_tokens.cdc](https://github.com/onflow/flow-core-contracts/blob/master/transactions/flowToken/transfer_tokens.cdc)
- FT.02	查询余额	[flowToken/scripts/get_balance.cdc](https://github.com/onflow/flow-core-contracts/blob/master/transactions/flowToken/scripts/get_balance.cdc)
- FT.03	查询总量	[flowToken/scripts/get_supply.cdc](https://github.com/onflow/flow-core-contracts/blob/master/transactions/flowToken/scripts/get_supply.cdc)
 

## 支付账户，交易和仓储费 FlowFees 

- [FlowFees.cdc 源码](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc)


- Testnet	`0x912d5440f7e3769e`
- Mainnet	`0xf919ee77447b7497`


## 质押和委派（FlowIDTableStaking）

- [FlowIDTableStaking.cdc 源码](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowIDTableStaking.cdc)


- Testnet	`0x9eca2b38b18b5dfe`
- Mainnet	`0x8624b52f9ddcd04a`


## 代币锁仓（LockedTokens）

- [LockedTokens.cdc 源码](https://github.com/onflow/flow-core-contracts/blob/master/contracts/LockedTokens.cdc)


- Testnet	`0x95e019a17d0e23d7`
- Mainnet	`0x8d0e87b65159ae63`


- [StakingProxy.cdc 源码](https://github.com/onflow/flow-core-contracts/blob/master/contracts/StakingProxy.cdc)


- Testnet	`0x7aad92e5a0715d21`
- Mainnet	`0x62430cf28c26d095`