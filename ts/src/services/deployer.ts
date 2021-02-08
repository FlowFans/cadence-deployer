import { FlowService } from "./flow";
import * as fs from "fs";
import * as path from "path";

class DeployerService {
  constructor(
    private readonly flowService: FlowService,
    private readonly fungibleTokenAddress: string,
    private readonly nonFungibleTokenAddress: string,
    private readonly contractFlowAddress: string,
    private readonly contractAccountIndex: string,
    private readonly contractPrivateKeyHex: string
  ) {}

  deploy = async () => {
    // build the authorization
    const authorization = this.flowService.authorize({
      accountAddress: this.contractFlowAddress,
      keyIdx: this.contractAccountIndex,
      privateKey: this.contractPrivateKeyHex,
    });
    const payer = this.flowService.authorizeAccount();

    // Deploy HelloWorld
    let contract = fs
      .readFileSync(
        path.join(
          __dirname,
          `../cadence/helloworld/contracts/HelloWorld.cdc`
        ),
        "utf8"
      )
      // .replace(/0xFUNGIBLETOKENADDRESS/gi, `0x${this.fungibleTokenAddress}`);
      // replace 非必须，根据具体合约修改
    console.log("deploying...");

    console.log("deploying helloworld contract...");
    const helloworld = await this.flowService.addContract({
      name: "HelloWorld",
      code: contract,
      authorizations: [authorization],
      proposer: authorization,
      payer,
    });
    console.log("deployed helloworld contract");
 
    return { helloworld };
  };
}

export { DeployerService };
