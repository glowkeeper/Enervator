/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { Exchanger } from "./Exchanger";

export class ExchangerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }
  deploy(): Promise<Exchanger> {
    return super.deploy() as Promise<Exchanger>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): Exchanger {
    return super.attach(address) as Exchanger;
  }
  connect(signer: Signer): ExchangerFactory {
    return super.connect(signer) as ExchangerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Exchanger {
    return new Contract(address, _abi, signerOrProvider) as Exchanger;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_epochTime",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_buyer",
        type: "address"
      },
      {
        indexed: false,
        name: "_buyRef",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_depositRef",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_amountWEI",
        type: "uint256"
      }
    ],
    name: "Buy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_enervatorManager",
        type: "address"
      },
      {
        name: "_depositDB",
        type: "address"
      },
      {
        name: "_forexDB",
        type: "address"
      },
      {
        name: "_buyDB",
        type: "address"
      }
    ],
    name: "setComponents",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      },
      {
        name: "_canWithdraw",
        type: "bool"
      }
    ],
    name: "setCanWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "bytes32"
      },
      {
        name: "_rate",
        type: "uint256"
      }
    ],
    name: "setRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_depositor",
        type: "address"
      },
      {
        name: "_depositRef",
        type: "bytes32"
      },
      {
        name: "_code",
        type: "bytes32"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        components: [
          {
            name: "amountWEI",
            type: "uint256"
          },
          {
            name: "buyer",
            type: "address"
          },
          {
            name: "buyRef",
            type: "bytes32"
          },
          {
            name: "depositRef",
            type: "bytes32"
          }
        ],
        name: "_buyData",
        type: "tuple"
      }
    ],
    name: "buy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_buyer",
        type: "address"
      },
      {
        name: "_amountWEI",
        type: "uint256"
      },
      {
        name: "_buyData",
        type: "bytes"
      }
    ],
    name: "bought",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3612fb0806100cf6000396000f3fe608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480638f32d59b116100835780638f32d59b1461013c578063dd5597b91461015a578063e9a0e87714610176578063f2fde38b14610192578063f789cb75146101ae576100bb565b8063270a233e146100c057806345afdc8d146100dc578063680819eb146100f8578063715018a6146101145780638da5cb5b1461011e575b600080fd5b6100da60048036036100d59190810190612277565b6101ca565b005b6100f660048036036100f19190810190612214565b610532565b005b610112600480360361010d91908101906123d4565b610843565b005b61011c610ac5565b005b610126610bcb565b6040516101339190612a74565b60405180910390f35b610144610bf4565b6040516101519190612b12565b60405180910390f35b610174600480360361016f9190810190612398565b610c4b565b005b610190600480360361018b91908101906122da565b610e8a565b005b6101ac60048036036101a791908101906121c2565b6113da565b005b6101c860048036036101c39190810190612410565b61142d565b005b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561025c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025390612dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c390612dba565b60405180910390fd5b60007f010000000000000000000000000000000000000000000000000000000000000002836000602081106102fd57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037a90612d7a565b60405180910390fd5b60007f010000000000000000000000000000000000000000000000000000000000000002826000602081106103b457fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043190612c1a565b60405180910390fd5b6000811161047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490612d5a565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663270a233e858585856040518563ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016104fa9493929190612a8f565b600060405180830381600087803b15801561051457600080fd5b505af1158015610528573d6000803e3d6000fd5b5050505050505050565b61053a610bf4565b610579576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057090612d1a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156105e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e090612c9a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065090612dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c090612cfa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610739576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073090612cba565b60405180910390fd5b83600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61084b610bf4565b61088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190612d1a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561091c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091390612cfa565b60405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028260006020811061094d57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90612c1a565b60405180910390fd5b60008111610a16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0d90612cda565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663680819eb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401610a8f929190612b71565b600060405180830381600087803b158015610aa957600080fd5b505af1158015610abd573d6000803e3d6000fd5b505050505050565b610acd610bf4565b610b0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0390612d1a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610c53610bf4565b610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8990612d1a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1b90612dda565b60405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000282600060208110610d5557fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610ddb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd290612d7a565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd5597b983836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401610e54929190612b48565b600060405180830381600087803b158015610e6e57600080fd5b505af1158015610e82573d6000803e3d6000fd5b505050505050565b610e9333611f24565b610ed2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec990612c3a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5b90612dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ff6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fed90612cba565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105d90612d3a565b60405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028282600081811061109757fe5b905001357f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611143576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113a90612d9a565b60405180910390fd5b606082828080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060008060006020840151925060408401519150606084015190506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dac69fc5846040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161121f9190612b2d565b60206040518083038186803b15801561123757600080fd5b505afa15801561124b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061126f919081019061236f565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3764ffa8a8584866040518563ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016112ee9493929190612a8f565b600060405180830381600087803b15801561130857600080fd5b505af115801561131c573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663797a6c1b8a86868c6040518563ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161139d9493929190612a8f565b600060405180830381600087803b1580156113b757600080fd5b505af11580156113cb573d6000803e3d6000fd5b50505050505050505050505050565b6113e2610bf4565b611421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141890612d1a565b60405180910390fd5b61142a81611f8f565b50565b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156114bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b690612cfa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154890612dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16816020013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156115db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d290612d3a565b60405180910390fd5b60007f010000000000000000000000000000000000000000000000000000000000000002816040013560006020811061161057fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611696576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168d90612c5a565b60405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000281606001356000602081106116cb57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174890612d7a565b60405180910390fd5b6000816000013511611798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178f90612bfa565b60405180910390fd5b806020013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc4ba01583606001356040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016118449190612b2d565b60206040518083038186803b15801561185c57600080fd5b505afa158015611870573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061189491908101906121eb565b73ffffffffffffffffffffffffffffffffffffffff16146118ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e190612c7a565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac1a7da482606001356040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016119659190612b2d565b60206040518083038186803b15801561197d57600080fd5b505afa158015611991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506119b59190810190612346565b6119f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119eb90612b9a565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dac69fc583606001356040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401611a719190612b2d565b60206040518083038186803b158015611a8957600080fd5b505afa158015611a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611ac1919081019061236f565b905060007f01000000000000000000000000000000000000000000000000000000000000000281600060208110611af457fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611b7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b7190612c1a565b60405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b32b56f9836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401611bf39190612b2d565b60206040518083038186803b158015611c0b57600080fd5b505afa158015611c1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611c439190810190612439565b905060008111611c88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7f90612cda565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631cb92cb285606001356040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401611d059190612b2d565b60206040518083038186803b158015611d1d57600080fd5b505afa158015611d31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611d559190810190612439565b90506000670de0b6b3a76400008560000135840281611d7057fe5b04905080821015611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad90612bba565b60405180910390fd5b60608560400135866060013584604051602001611dd593929190612a37565b6040516020818303038152906040529050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639bd9bbc6876020013573ffffffffffffffffffffffffffffffffffffffff168860000135846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401611e7f93929190612ad4565b600060405180830381600087803b158015611e9957600080fd5b505af1158015611ead573d6000803e3d6000fd5b5050505060004290507ff4c627484d89fb76d29762bdb89c5c266ad18a515802bec5f3bbd0f5008d1fbd81886020013573ffffffffffffffffffffffffffffffffffffffff1689604001358a606001358b60000135604051611f13959493929190612dfa565b60405180910390a150505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f855760019050611f8a565b600090505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611fff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ff690612bda565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006120c98235612ecc565b905092915050565b60006120dd8251612ecc565b905092915050565b60006120f18235612ede565b905092915050565b60006121058251612ede565b905092915050565b60006121198235612eea565b905092915050565b600061212d8251612eea565b905092915050565b60008083601f84011261214757600080fd5b8235905067ffffffffffffffff81111561216057600080fd5b60208301915083600182028301111561217857600080fd5b9250929050565b60006080828403121561219157600080fd5b81905092915050565b60006121a68235612f14565b905092915050565b60006121ba8251612f14565b905092915050565b6000602082840312156121d457600080fd5b60006121e2848285016120bd565b91505092915050565b6000602082840312156121fd57600080fd5b600061220b848285016120d1565b91505092915050565b6000806000806080858703121561222a57600080fd5b6000612238878288016120bd565b9450506020612249878288016120bd565b935050604061225a878288016120bd565b925050606061226b878288016120bd565b91505092959194509250565b6000806000806080858703121561228d57600080fd5b600061229b878288016120bd565b94505060206122ac8782880161210d565b93505060406122bd8782880161210d565b92505060606122ce8782880161219a565b91505092959194509250565b600080600080606085870312156122f057600080fd5b60006122fe878288016120bd565b945050602061230f8782880161219a565b935050604085013567ffffffffffffffff81111561232c57600080fd5b61233887828801612135565b925092505092959194509250565b60006020828403121561235857600080fd5b6000612366848285016120f9565b91505092915050565b60006020828403121561238157600080fd5b600061238f84828501612121565b91505092915050565b600080604083850312156123ab57600080fd5b60006123b98582860161210d565b92505060206123ca858286016120e5565b9150509250929050565b600080604083850312156123e757600080fd5b60006123f58582860161210d565b92505060206124068582860161219a565b9150509250929050565b60006080828403121561242257600080fd5b60006124308482850161217f565b91505092915050565b60006020828403121561244b57600080fd5b6000612459848285016121ae565b91505092915050565b61246b81612e7a565b82525050565b61247a81612e8c565b82525050565b61248981612e98565b82525050565b6124a061249b82612e98565b612f51565b82525050565b60006124b182612e4d565b6124bb8185612e58565b93506124cb818560208601612f1e565b6124d481612f65565b840191505092915050565b60006124ec601c83612e69565b91507f6465706f7369742063616e6e6f742062652077697468647261776e21000000006000830152602082019050919050565b600061252c600c83612e69565b91507f4649415420213d205745492100000000000000000000000000000000000000006000830152602082019050919050565b600061256c602683612e69565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006125d2600e83612e69565b91507f6e6f2077656920746f20627579210000000000000000000000000000000000006000830152602082019050919050565b6000612612601a83612e69565b91507f6e6f2063757272656e637920636f646520737570706c696564210000000000006000830152602082019050919050565b6000612652602083612e69565b91507f7468617420616464726573732063616e6e6f742073656e6420746f6b656e73216000830152602082019050919050565b6000612692601a83612e69565b91507f6e6f20627579207265666572656e636520737570706c696564210000000000006000830152602082019050919050565b60006126d2602a83612e69565b91507f627579657220616e64206465706f73697420616464726573736573206172652060008301527f646966666572656e7421000000000000000000000000000000000000000000006020830152604082019050919050565b6000612738602183612e69565b91507f6e6f206164647265737320666f7220456e65727661746f72204d616e6167657260008301527f21000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061279e601583612e69565b91507f6e6f206164647265737320666f722062757944422100000000000000000000006000830152602082019050919050565b60006127de601183612e69565b91507f6e6f207261746520737570706c696564210000000000000000000000000000006000830152602082019050919050565b600061281e601783612e69565b91507f6e6f206164647265737320666f7220666f7265784442210000000000000000006000830152602082019050919050565b600061285e602083612e69565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b600061289e601583612e69565b91507f6e6f206164647265737320666f722062757965722100000000000000000000006000830152602082019050919050565b60006128de601383612e69565b91507f6e6f206465706f73697420746f206d616b6521000000000000000000000000006000830152602082019050919050565b600061291e601e83612e69565b91507f6e6f206465706f736974207265666572656e636520737570706c6965642100006000830152602082019050919050565b600061295e601583612e69565b91507f6e6f20627579206461746120737570706c6965642100000000000000000000006000830152602082019050919050565b600061299e601b83612e69565b91507f7a65726f206164647265737320666f72206465706f7369746f722100000000006000830152602082019050919050565b60006129de601983612e69565b91507f6e6f206164647265737320666f72206465706f736974444221000000000000006000830152602082019050919050565b612a1a81612ec2565b82525050565b612a31612a2c82612ec2565b612f5b565b82525050565b6000612a43828661248f565b602082019150612a53828561248f565b602082019150612a638284612a20565b602082019150819050949350505050565b6000602082019050612a896000830184612462565b92915050565b6000608082019050612aa46000830187612462565b612ab16020830186612480565b612abe6040830185612480565b612acb6060830184612a11565b95945050505050565b6000606082019050612ae96000830186612462565b612af66020830185612a11565b8181036040830152612b0881846124a6565b9050949350505050565b6000602082019050612b276000830184612471565b92915050565b6000602082019050612b426000830184612480565b92915050565b6000604082019050612b5d6000830185612480565b612b6a6020830184612471565b9392505050565b6000604082019050612b866000830185612480565b612b936020830184612a11565b9392505050565b60006020820190508181036000830152612bb3816124df565b9050919050565b60006020820190508181036000830152612bd38161251f565b9050919050565b60006020820190508181036000830152612bf38161255f565b9050919050565b60006020820190508181036000830152612c13816125c5565b9050919050565b60006020820190508181036000830152612c3381612605565b9050919050565b60006020820190508181036000830152612c5381612645565b9050919050565b60006020820190508181036000830152612c7381612685565b9050919050565b60006020820190508181036000830152612c93816126c5565b9050919050565b60006020820190508181036000830152612cb38161272b565b9050919050565b60006020820190508181036000830152612cd381612791565b9050919050565b60006020820190508181036000830152612cf3816127d1565b9050919050565b60006020820190508181036000830152612d1381612811565b9050919050565b60006020820190508181036000830152612d3381612851565b9050919050565b60006020820190508181036000830152612d5381612891565b9050919050565b60006020820190508181036000830152612d73816128d1565b9050919050565b60006020820190508181036000830152612d9381612911565b9050919050565b60006020820190508181036000830152612db381612951565b9050919050565b60006020820190508181036000830152612dd381612991565b9050919050565b60006020820190508181036000830152612df3816129d1565b9050919050565b600060a082019050612e0f6000830188612a11565b612e1c6020830187612462565b612e296040830186612480565b612e366060830185612480565b612e436080830184612a11565b9695505050505050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612e8582612ea2565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612ed782612ef4565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015612f3c578082015181840152602081019050612f21565b83811115612f4b576000848401525b50505050565b6000819050919050565b6000819050919050565b6000601f19601f830116905091905056fea265627a7a72305820f2d7e6251a0572cfae580aed22f39b1c185aa937c7a248ce95bf4cb24c2d7e826c6578706572696d656e74616cf50037";
