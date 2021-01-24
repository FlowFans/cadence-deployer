# cadence-deployer

单独部署 Cadence 合约至 Flow 测试网

 

## 安装依赖

```shell
yarn
```

## 修改配置

按照`.env.example`的格式创建一个 `.env`文件（该文件数据不要公开上传），里面的`ACCOUNT_ADDRESS` 和 `ACCOUNT_PRIVATE_KEY` 分别是合约想要部署的账户地址和账户的私钥。

- [如何获得测试网账户](https://docs.onflow.org/dapp-deployment/testnet-deployment/)

- [测试网地址及代币申请](https://testnet-faucet.onflow.org/)

  
## 运行启动

```shell
yarn start:dev
```

- 正常运行结束后，合约应该会被成功部署到对应的区块链网络上

```shell
starting deployment of contracts, accessNode: https://access-testnet.onflow.org  address: 64ce437a3838c89d
deploying...
deploying helloworld contract...
add contract name: HelloWorld
deployed helloworld contract
result {
  helloworld: { status: 4, statusCode: 0, errorMessage: '', events: [ [Object] ] }
}
https://flow-view-source.com/testnet/account/0x64ce437a3838c89d
Done in 30.48s.
```


## 查看合约

- 你可以通过如下网址查看合约部署情况 [live demo of HelloWorld ](https://flow-view-source.com/testnet/account/0x64ce437a3838c89d)：

`https://flow-view-source.com/testnet/account/ACCOUNT_ADDRESS`. 


