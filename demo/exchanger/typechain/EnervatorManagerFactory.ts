/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { EnervatorManager } from "./EnervatorManager";

export class EnervatorManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }
  deploy(
    _values: {
      pricePerMWh: BigNumberish;
      currentTPES: BigNumberish;
      oldTPES: BigNumberish;
      perCapitaEnergy: BigNumberish;
      unitValue: BigNumberish;
    },
    _exchanger: string
  ): Promise<EnervatorManager> {
    return super.deploy(_values, _exchanger) as Promise<EnervatorManager>;
  }
  getDeployTransaction(
    _values: {
      pricePerMWh: BigNumberish;
      currentTPES: BigNumberish;
      oldTPES: BigNumberish;
      perCapitaEnergy: BigNumberish;
      unitValue: BigNumberish;
    },
    _exchanger: string
  ): UnsignedTransaction {
    return super.getDeployTransaction(_values, _exchanger);
  }
  attach(address: string): EnervatorManager {
    return super.attach(address) as EnervatorManager;
  }
  connect(signer: Signer): EnervatorManagerFactory {
    return super.connect(signer) as EnervatorManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnervatorManager {
    return new Contract(address, _abi, signerOrProvider) as EnervatorManager;
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
    inputs: [
      {
        components: [
          {
            name: "pricePerMWh",
            type: "int128"
          },
          {
            name: "currentTPES",
            type: "int128"
          },
          {
            name: "oldTPES",
            type: "int128"
          },
          {
            name: "perCapitaEnergy",
            type: "int128"
          },
          {
            name: "unitValue",
            type: "int256"
          }
        ],
        name: "_values",
        type: "tuple"
      },
      {
        name: "_exchanger",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        name: "operatorData",
        type: "bytes"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "fromBalance",
        type: "uint256"
      },
      {
        indexed: false,
        name: "toBalance",
        type: "uint256"
      }
    ],
    name: "TokensReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "data",
        type: "bytes"
      },
      {
        indexed: false,
        name: "operatorData",
        type: "bytes"
      },
      {
        indexed: false,
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        name: "fromBalance",
        type: "uint256"
      },
      {
        indexed: false,
        name: "toBalance",
        type: "uint256"
      }
    ],
    name: "TokensSent",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address"
      }
    ],
    name: "setToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "addTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "burnTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "int128"
      }
    ],
    name: "setNewTPES",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "int128"
      }
    ],
    name: "setPerCapitaEnergy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_recipient",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      },
      {
        name: "_buyData",
        type: "bytes"
      }
    ],
    name: "send",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      },
      {
        name: "userData",
        type: "bytes"
      },
      {
        name: "operatorData",
        type: "bytes"
      }
    ],
    name: "tokensReceived",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      },
      {
        name: "userData",
        type: "bytes"
      },
      {
        name: "operatorData",
        type: "bytes"
      }
    ],
    name: "tokensToSend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPricePerMWh",
    outputs: [
      {
        name: "",
        type: "int128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getCurrentTPES",
    outputs: [
      {
        name: "",
        type: "int128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getOldTPES",
    outputs: [
      {
        name: "",
        type: "int128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPerCapitaEnergy",
    outputs: [
      {
        name: "",
        type: "int128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getUnitValue",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052731820a4b7618bde71dce8cdc73aab6c95905fad24600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156200006657600080fd5b5060405160c080620034bb833981018060405262000088919081019062000a50565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008260000151600f0b1362000191576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001889062000c5c565b60405180910390fd5b60008260200151600f0b13620001de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001d59062000ca0565b60405180910390fd5b60008260400151600f0b136200022b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002229062000c7e565b60405180910390fd5b60008260600151600f0b1362000278576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200026f9062000cc2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002e29062000c3a565b60405180910390fd5b8160000151600260000160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055508160200151600260000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055508160400151600260010160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055508160600151600260010160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055506000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329965a1d307f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe895600102306040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016200051a9392919062000bfd565b600060405180830381600087803b1580156200053557600080fd5b505af11580156200054a573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329965a1d307fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b600102306040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401620005ee9392919062000bfd565b600060405180830381600087803b1580156200060957600080fd5b505af11580156200061e573d6000803e3d6000fd5b505050506200063b62000643640100000000026401000000009004565b505062000dac565b6000600260000160009054906101000a9004600f0b600f0b136200069e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006959062000c5c565b60405180910390fd5b6000600260000160109054906101000a9004600f0b600f0b13620006f9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006f09062000ca0565b60405180910390fd5b6000600260010160009054906101000a9004600f0b600f0b1362000754576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200074b9062000c7e565b60405180910390fd5b6000600260010160109054906101000a9004600f0b600f0b13620007af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007a69062000cc2565b60405180910390fd5b6000620007f5600260010160009054906101000a9004600f0b600260000160109054906101000a9004600f0b6200086e64010000000002620019d5176401000000009004565b905060006200082b82600260010160109054906101000a9004600f0b6200086e64010000000002620019d5176401000000009004565b90506200085f81600260000160009054906101000a9004600f0b620008f86401000000000262001a5b176401000000009004565b600f0b60028001819055505050565b60008082600f0b14156200088157600080fd5b600082600f0b604085600f0b9060020a02816200089a57fe5b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b8112158015620008e457506f7fffffffffffffffffffffffffffffff600f0b8113155b620008ee57600080fd5b8091505092915050565b600080604083600f0b85600f0b029060008212600003808260020a82851804189250505090507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b81121580156200096557506f7fffffffffffffffffffffffffffffff600f0b8113155b6200096f57600080fd5b8091505092915050565b600062000987825162000d61565b905092915050565b60006200099d825162000d75565b905092915050565b6000620009b3825162000d82565b905092915050565b600060a08284031215620009ce57600080fd5b620009da60a062000ce4565b90506000620009ec848285016200098f565b600083015250602062000a02848285016200098f565b602083015250604062000a18848285016200098f565b604083015250606062000a2e848285016200098f565b606083015250608062000a4484828501620009a5565b60808301525092915050565b60008060c0838503121562000a6457600080fd5b600062000a7485828601620009bb565b92505060a062000a878582860162000979565b9150509250929050565b62000a9c8162000d23565b82525050565b62000aad8162000d37565b82525050565b600062000ac2601e8362000d12565b91507f6e6f2065786368616e676572206164647265737320737570706c6965642100006000830152602082019050919050565b600062000b0460138362000d12565b91507f70726963655065724d576820696e76616c6964000000000000000000000000006000830152602082019050919050565b600062000b46600f8362000d12565b91507f6f6c645450455320696e76616c696400000000000000000000000000000000006000830152602082019050919050565b600062000b8860138362000d12565b91507f63757272656e745450455320696e76616c6964000000000000000000000000006000830152602082019050919050565b600062000bca60178362000d12565b91507f706572436170697461456e6572677920696e76616c69640000000000000000006000830152602082019050919050565b600060608201905062000c14600083018662000a91565b62000c23602083018562000aa2565b62000c32604083018462000a91565b949350505050565b6000602082019050818103600083015262000c558162000ab3565b9050919050565b6000602082019050818103600083015262000c778162000af5565b9050919050565b6000602082019050818103600083015262000c998162000b37565b9050919050565b6000602082019050818103600083015262000cbb8162000b79565b9050919050565b6000602082019050818103600083015262000cdd8162000bbb565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171562000d0857600080fd5b8060405250919050565b600082825260208201905092915050565b600062000d308262000d41565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000d6e8262000d8c565b9050919050565b600081600f0b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6126ff8062000dbc6000396000f3fe608060405234801561001057600080fd5b5060043610610127576000357c0100000000000000000000000000000000000000000000000000000000900480639ba132a8116100bf578063c22808af1161008e578063c22808af14610274578063c6ed899014610292578063d204dbd3146102ae578063e36806a7146102cc578063f2fde38b146102e857610127565b80639ba132a8146101fe5780639bd9bbc61461021c578063b7a1218f14610238578063bc721d471461025657610127565b806375ab9782116100fb57806375ab97821461018a5780638cb8d2ef146101a65780638da5cb5b146101c25780638f32d59b146101e057610127565b806223de291461012c578063144fa6d7146101485780636d1b229d14610164578063715018a614610180575b600080fd5b61014660048036036101419190810190611b9d565b610304565b005b610162600480360361015d9190810190611b74565b610678565b005b61017e60048036036101799190810190611cf5565b610773565b005b610188610907565b005b6101a4600480360361019f9190810190611b9d565b610a0d565b005b6101c060048036036101bb9190810190611ccc565b610ed2565b005b6101ca610fc4565b6040516101d791906121e5565b60405180910390f35b6101e8610fed565b6040516101f5919061238f565b60405180910390f35b610206611044565b60405161021391906123aa565b60405180910390f35b61023660048036036102319190810190611c60565b61105e565b005b61024061137f565b60405161024d91906123aa565b60405180910390f35b61025e611399565b60405161026b91906123c5565b60405180910390f35b61027c6113a5565b60405161028991906123aa565b60405180910390f35b6102ac60048036036102a79190810190611cf5565b6113bf565b005b6102b6611551565b6040516102c391906123aa565b60405180910390f35b6102e660048036036102e19190810190611ccc565b61156b565b005b61030260048036036102fd9190810190611b74565b61160c565b005b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610396576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038d906125a0565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610426576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041d906123e0565b60405180910390fd5b60008511610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046090612400565b60405180910390fd5b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016104e291906121e5565b60206040518083038186803b1580156104fa57600080fd5b505afa15801561050e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105329190810190611d1e565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016105ad91906121e5565b60206040518083038186803b1580156105c557600080fd5b505afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105fd9190810190611d1e565b90507f41a49a9e630641f48d7018863770b98221b2fa73b34b980f227fd1ff7ee65f708a8a8a8a8a8a8a8a600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168b8b6040516106649b9a99989796959493929190612200565b60405180910390a150505050505050505050565b610680610fed565b6106bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b6906124e0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561072f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610726906124a0565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61077b610fed565b6107ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b1906124e0565b60405180910390fd5b600081116107c757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610859576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610850906125a0565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc673c4f30836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016108d2929190612340565b600060405180830381600087803b1580156108ec57600080fd5b505af1158015610900573d6000803e3d6000fd5b5050505050565b61090f610fed565b61094e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610945906124e0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a96906125a0565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b26906123e0565b60405180910390fd5b60008511610b72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6990612560565b60405180910390fd5b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401610beb91906121e5565b60206040518083038186803b158015610c0357600080fd5b505afa158015610c17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610c3b9190810190611d1e565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401610cb691906121e5565b60206040518083038186803b158015610cce57600080fd5b505afa158015610ce2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610d069190810190611d1e565b905060007f01000000000000000000000000000000000000000000000000000000000000000284846000818110610d3957fe5b905001357f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610e5957600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e9a0e877898987876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401610e269493929190612300565b600060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b505050505b7f5681393d0ba8c1234f522f74f6f792da6b28132ff291a363d687689583316cec8a8a8a8a8a8a8a8a600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168b8b604051610ebe9b9a99989796959493929190612200565b60405180910390a150505050505050505050565b610eda610fed565b610f19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f10906124e0565b60405180910390fd5b600081600f0b13610f2957600080fd5b600260000160109054906101000a9004600f0b600260010160006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555080600260000160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff160217905550610fc161165f565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600260000160009054906101000a9004600f0b905090565b6110673361183c565b6110a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109d90612460565b60405180910390fd5b600083116110e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e090612440565b60405180910390fd5b60007f0100000000000000000000000000000000000000000000000000000000000000028282600081811061111a57fe5b905001357f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156111c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bd90612520565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611258576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124f906125a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156112c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bf90612480565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166362ad1b8330868686866040518663ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161134795949392919061229f565b600060405180830381600087803b15801561136157600080fd5b505af1158015611375573d6000803e3d6000fd5b5050505050505050565b6000600260000160109054906101000a9004600f0b905090565b60006002800154905090565b6000600260010160009054906101000a9004600f0b905090565b6113c7610fed565b611406576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fd906124e0565b60405180910390fd5b6000811161141357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156114a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149c906125a0565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340753a76826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161151c91906125c0565b600060405180830381600087803b15801561153657600080fd5b505af115801561154a573d6000803e3d6000fd5b5050505050565b6000600260010160109054906101000a9004600f0b905090565b611573610fed565b6115b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a9906124e0565b60405180910390fd5b600081600f0b136115c257600080fd5b80600260010160106101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555061160961165f565b50565b611614610fed565b611653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164a906124e0565b60405180910390fd5b61165c816118a7565b50565b6000600260000160009054906101000a9004600f0b600f0b136116b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ae906124c0565b60405180910390fd5b6000600260000160109054906101000a9004600f0b600f0b1361170f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170690612540565b60405180910390fd5b6000600260010160009054906101000a9004600f0b600f0b13611767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175e90612500565b60405180910390fd5b6000600260010160109054906101000a9004600f0b600f0b136117bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b690612580565b60405180910390fd5b60006117ef600260010160009054906101000a9004600f0b600260000160109054906101000a9004600f0b6119d5565b9050600061180f82600260010160109054906101000a9004600f0b6119d5565b905061182d81600260000160009054906101000a9004600f0b611a5b565b600f0b60028001819055505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561189d57600190506118a2565b600090505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190e90612420565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082600f0b14156119e757600080fd5b600082600f0b604085600f0b9060020a02816119ff57fe5b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b8112158015611a4857506f7fffffffffffffffffffffffffffffff600f0b8113155b611a5157600080fd5b8091505092915050565b600080604083600f0b85600f0b029060008212600003808260020a82851804189250505090507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b8112158015611ac757506f7fffffffffffffffffffffffffffffff600f0b8113155b611ad057600080fd5b8091505092915050565b6000611ae6823561265c565b905092915050565b60008083601f840112611b0057600080fd5b8235905067ffffffffffffffff811115611b1957600080fd5b602083019150836001820283011115611b3157600080fd5b9250929050565b6000611b44823561266e565b905092915050565b6000611b58823561269b565b905092915050565b6000611b6c825161269b565b905092915050565b600060208284031215611b8657600080fd5b6000611b9484828501611ada565b91505092915050565b60008060008060008060008060c0898b031215611bb957600080fd5b6000611bc78b828c01611ada565b9850506020611bd88b828c01611ada565b9750506040611be98b828c01611ada565b9650506060611bfa8b828c01611b4c565b955050608089013567ffffffffffffffff811115611c1757600080fd5b611c238b828c01611aee565b945094505060a089013567ffffffffffffffff811115611c4257600080fd5b611c4e8b828c01611aee565b92509250509295985092959890939650565b60008060008060608587031215611c7657600080fd5b6000611c8487828801611ada565b9450506020611c9587828801611b4c565b935050604085013567ffffffffffffffff811115611cb257600080fd5b611cbe87828801611aee565b925092505092959194509250565b600060208284031215611cde57600080fd5b6000611cec84828501611b38565b91505092915050565b600060208284031215611d0757600080fd5b6000611d1584828501611b4c565b91505092915050565b600060208284031215611d3057600080fd5b6000611d3e84828501611b60565b91505092915050565b611d50816125fd565b82525050565b611d5f8161260f565b82525050565b6000611d7183856125db565b9350611d7e8385846126a5565b611d87836126b4565b840190509392505050565b611d9b8161261b565b82525050565b611daa81612628565b82525050565b6000611dbd6015836125ec565b91507f696e76616c696420746f6b656e2073656e6465722100000000000000000000006000830152602082019050919050565b6000611dfd6013836125ec565b91507f6e6f20746f6b656e7320726563656976656421000000000000000000000000006000830152602082019050919050565b6000611e3d6026836125ec565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ea3601b836125ec565b91507f696e2073656e643a206e6f20746f6b656e7320746f2073656e642100000000006000830152602082019050919050565b6000611ee36020836125ec565b91507f7468617420616464726573732063616e6e6f742073656e6420746f6b656e73216000830152602082019050919050565b6000611f23601b836125ec565b91507f7a65726f206164647265737320666f7220726563697069656e742100000000006000830152602082019050919050565b6000611f63601e836125ec565b91507f7a65726f20616464726573732070617373656420666f7220746f6b656e2100006000830152602082019050919050565b6000611fa36013836125ec565b91507f70726963655065724d576820696e76616c6964000000000000000000000000006000830152602082019050919050565b6000611fe36020836125ec565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000612023600f836125ec565b91507f6f6c645450455320696e76616c696400000000000000000000000000000000006000830152602082019050919050565b60006120636015836125ec565b91507f6e6f20627579206461746120737570706c6965642100000000000000000000006000830152602082019050919050565b60006120a36013836125ec565b91507f63757272656e745450455320696e76616c6964000000000000000000000000006000830152602082019050919050565b60006120e36000836125db565b9150600082019050919050565b60006120fd6023836125ec565b91507f696e20746f6b656e73546f53656e643a206e6f20746f6b656e7320746f20736560008301527f6e642100000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006121636017836125ec565b91507f706572436170697461456e6572677920696e76616c69640000000000000000006000830152602082019050919050565b60006121a36017836125ec565b91507f7a65726f206164647265737320666f7220746f6b656e210000000000000000006000830152602082019050919050565b6121df81612652565b82525050565b60006020820190506121fa6000830184611d47565b92915050565b600061012082019050612216600083018e611d47565b612223602083018d611d47565b612230604083018c611d47565b61223d606083018b6121d6565b818103608083015261225081898b611d65565b905081810360a0830152612265818789611d65565b905061227460c0830186611d47565b61228160e08301856121d6565b61228f6101008301846121d6565b9c9b505050505050505050505050565b600060a0820190506122b46000830188611d47565b6122c16020830187611d47565b6122ce60408301866121d6565b81810360608301526122df816120d6565b905081810360808301526122f4818486611d65565b90509695505050505050565b60006060820190506123156000830187611d47565b61232260208301866121d6565b8181036040830152612335818486611d65565b905095945050505050565b60006080820190506123556000830185611d47565b61236260208301846121d6565b8181036040830152612373816120d6565b90508181036060830152612386816120d6565b90509392505050565b60006020820190506123a46000830184611d56565b92915050565b60006020820190506123bf6000830184611d92565b92915050565b60006020820190506123da6000830184611da1565b92915050565b600060208201905081810360008301526123f981611db0565b9050919050565b6000602082019050818103600083015261241981611df0565b9050919050565b6000602082019050818103600083015261243981611e30565b9050919050565b6000602082019050818103600083015261245981611e96565b9050919050565b6000602082019050818103600083015261247981611ed6565b9050919050565b6000602082019050818103600083015261249981611f16565b9050919050565b600060208201905081810360008301526124b981611f56565b9050919050565b600060208201905081810360008301526124d981611f96565b9050919050565b600060208201905081810360008301526124f981611fd6565b9050919050565b6000602082019050818103600083015261251981612016565b9050919050565b6000602082019050818103600083015261253981612056565b9050919050565b6000602082019050818103600083015261255981612096565b9050919050565b60006020820190508181036000830152612579816120f0565b9050919050565b6000602082019050818103600083015261259981612156565b9050919050565b600060208201905081810360008301526125b981612196565b9050919050565b60006020820190506125d560008301846121d6565b92915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061260882612632565b9050919050565b60008115159050919050565b600081600f0b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006126678261267b565b9050919050565b600081600f0b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b6000601f19601f830116905091905056fea265627a7a723058208e26f4998425e0fae995b19a07fe30fd7b8b00e12474addfa200666e7bd4f5326c6578706572696d656e74616cf50037";