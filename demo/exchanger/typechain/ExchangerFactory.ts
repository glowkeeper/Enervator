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
      }
    ],
    name: "Bought",
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
        type: "int128"
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
        type: "int128"
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
        name: "_buyer",
        type: "address"
      },
      {
        name: "_buyRef",
        type: "bytes32"
      },
      {
        name: "_depositRef",
        type: "bytes32"
      },
      {
        name: "_amountFIAT",
        type: "int128"
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
        name: "_amountEOR",
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
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36129e8806100cf6000396000f3fe608060405234801561001057600080fd5b50600436106100bb576000357c0100000000000000000000000000000000000000000000000000000000900480638da5cb5b116100835780638da5cb5b146102735780638f32d59b146102bd578063dd5597b9146102df578063e9a0e87714610319578063f2fde38b146103bc576100bb565b80632c2faf65146100c057806345afdc8d146101255780636a2c87f3146101c9578063715018a61461022e5780637d665eda14610238575b600080fd5b610123600480360360808110156100d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035600f0b9060200190929190505050610400565b005b6101c76004803603608081101561013b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108ae565b005b61022c600480360360808110156101df57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035600f0b9060200190929190505050610ca1565b005b6102366117d4565b005b6102716004803603604081101561024e57600080fd5b81019080803590602001909291908035600f0b906020019092919050505061190d565b005b61027b611c6a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c5611c93565b604051808215151515815260200191505060405180910390f35b610317600480360360408110156102f557600080fd5b8101908080359060200190929190803515159060200190929190505050611cea565b005b6103ba6004803603606081101561032f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561037657600080fd5b82018360208201111561038857600080fd5b803590602001918460018302840111640100000000831117156103aa57600080fd5b9091929391929390505050611fcc565b005b6103fe600480360360208110156103d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612716565b005b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6e6f206164647265737320666f72206465706f7369744442210000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f7a65726f206164647265737320666f72206465706f7369746f7221000000000081525060200191505060405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028360006020811061059957fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f6e6f206465706f736974207265666572656e636520737570706c69656421000081525060200191505060405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028260006020811061068357fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561073c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f6e6f2063757272656e637920636f646520737570706c6965642100000000000081525060200191505060405180910390fd5b600081600f0b136107b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6e6f206465706f73697420746f206d616b65210000000000000000000000000081525060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632c2faf65858585856040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182600f0b600f0b8152602001945050505050600060405180830381600087803b15801561089057600080fd5b505af11580156108a4573d6000803e3d6000fd5b5050505050505050565b6108b6611c93565b610928576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156109ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061299c6021913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a51576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6e6f206164647265737320666f72206465706f7369744442210000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610af4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f6e6f206164647265737320666f7220666f72657844422100000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f206164647265737320666f7220627579444221000000000000000000000081525060200191505060405180910390fd5b83600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d66576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f6e6f206164647265737320666f7220666f72657844422100000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e2b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6e6f206164647265737320666f72206465706f7369744442210000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ece576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f206164647265737320666f7220627579657221000000000000000000000081525060200191505060405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000283600060208110610eff57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610fb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f6e6f20627579207265666572656e636520737570706c6965642100000000000081525060200191505060405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000282600060208110610fe957fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156110a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f6e6f206465706f736974207265666572656e636520737570706c69656421000081525060200191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc4ba015846040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b15801561114857600080fd5b505afa15801561115c573d6000803e3d6000fd5b505050506040513d602081101561117257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16146111ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612972602a913960400191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac1a7da4836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b15801561127e57600080fd5b505afa158015611292573d6000803e3d6000fd5b505050506040513d60208110156112a857600080fd5b810190808051906020019092919050505061132b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f6465706f7369742063616e6e6f742062652077697468647261776e210000000081525060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631cb92cb2836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b1580156113ba57600080fd5b505afa1580156113ce573d6000803e3d6000fd5b505050506040513d60208110156113e457600080fd5b8101908080519060200190929190505050600f0b81600f0b1315611470576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f63616e6e6f7420627579207468617420616d6f756e742100000000000000000081525060200191505060405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dac69fc5846040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b15801561150157600080fd5b505afa158015611515573d6000803e3d6000fd5b505050506040513d602081101561152b57600080fd5b810190808051906020019092919050505090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b32b56f9836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b1580156115cf57600080fd5b505afa1580156115e3573d6000803e3d6000fd5b505050506040513d60208110156115f957600080fd5b81019080805190602001909291905050509050600081600f0b84600f0b8161161d57fe5b0590506000670de0b6b3a76400008202905060608787876040516020018084815260200183815260200182600f0b600f0b70010000000000000000000000000000000002815260100193505050506040516020818303038152906040529050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639bd9bbc68a84600f0b846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611763578082015181840152602081019050611748565b50505050905090810190601f1680156117905780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156117b157600080fd5b505af11580156117c5573d6000803e3d6000fd5b50505050505050505050505050565b6117dc611c93565b61184e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b611915611c93565b611987576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611a4c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f6e6f206164647265737320666f7220666f72657844422100000000000000000081525060200191505060405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000282600060208110611a7d57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f6e6f2063757272656e637920636f646520737570706c6965642100000000000081525060200191505060405180910390fd5b600081600f0b13611baf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6e6f207261746520737570706c6965642100000000000000000000000000000081525060200191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637d665eda83836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182600f0b600f0b815260200192505050600060405180830381600087803b158015611c4e57600080fd5b505af1158015611c62573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b611cf2611c93565b611d64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611e29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6e6f206164647265737320666f72206465706f7369744442210000000000000081525060200191505060405180910390fd5b60007f01000000000000000000000000000000000000000000000000000000000000000282600060208110611e5a57fe5b1a7f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415611f13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f6e6f206465706f736974207265666572656e636520737570706c69656421000081525060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd5597b983836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018215151515815260200192505050600060405180830381600087803b158015611fb057600080fd5b505af1158015611fc4573d6000803e3d6000fd5b505050505050565b611fd53361279c565b612047576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f7468617420616464726573732063616e6e6f742073656e6420746f6b656e732181525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561210c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f6e6f206164647265737320666f72206465706f7369744442210000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156121d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f206164647265737320666f7220627579444221000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612274576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f206164647265737320666f7220627579657221000000000000000000000081525060200191505060405180910390fd5b600083116122ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f6e6f20454f5220737570706c696564000000000000000000000000000000000081525060200191505060405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028282600081811061231b57fe5b905001357f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156123fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6e6f20627579206461746120737570706c69656421000000000000000000000081525060200191505060405180910390fd5b606082828080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060008060006020840151925060408401519150605084015190506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dac69fc5846040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082815260200191505060206040518083038186803b1580156124ee57600080fd5b505afa158015612502573d6000803e3d6000fd5b505050506040513d602081101561251857600080fd5b81019080805190602001909291905050509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639eb0f6ad8a8584866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182600f0b600f0b8152602001945050505050600060405180830381600087803b15801561260657600080fd5b505af115801561261a573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663797a6c1b8a86868c6040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001828152602001945050505050600060405180830381600087803b1580156126f357600080fd5b505af1158015612707573d6000803e3d6000fd5b50505050505050505050505050565b61271e611c93565b612790576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61279981612807565b50565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156127fd5760019050612802565b600090505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561288d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061294c6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373627579657220616e64206465706f736974206164647265737365732061726520646966666572656e74216e6f206164647265737320666f7220456e65727661746f72204d616e6167657221a165627a7a723058205add6046106739bd89b7498f60a282d6a14bc55cea741dd7d6ef3464270ff81c0029";
