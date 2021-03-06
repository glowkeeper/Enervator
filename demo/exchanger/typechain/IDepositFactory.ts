/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IDeposit } from "./IDeposit";

export class IDepositFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDeposit {
    return new Contract(address, _abi, signerOrProvider) as IDeposit;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_x",
        type: "address"
      }
    ],
    name: "getExists",
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
    name: "withdraw",
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
    constant: true,
    inputs: [],
    name: "getNumDepositors",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getDepositor",
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
    inputs: [
      {
        name: "_depositor",
        type: "address"
      }
    ],
    name: "getNumDeposits",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_depositor",
        type: "address"
      },
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getDepositReference",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      }
    ],
    name: "getDepositedAddress",
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
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      }
    ],
    name: "getDepositedAmount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      }
    ],
    name: "getDepositedCode",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      }
    ],
    name: "getCanWithdraw",
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
    constant: true,
    inputs: [
      {
        name: "_depositRef",
        type: "bytes32"
      }
    ],
    name: "getDeposit",
    outputs: [
      {
        components: [
          {
            name: "amount",
            type: "uint256"
          },
          {
            name: "code",
            type: "bytes32"
          },
          {
            name: "account",
            type: "address"
          },
          {
            name: "canWithdraw",
            type: "bool"
          }
        ],
        name: "",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
