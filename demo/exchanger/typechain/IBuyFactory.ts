/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IBuy } from "./IBuy";

export class IBuyFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IBuy {
    return new Contract(address, _abi, signerOrProvider) as IBuy;
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
        name: "_amountWEI",
        type: "uint256"
      }
    ],
    name: "bought",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNumBuyers",
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
    name: "getBuys",
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
        name: "_buyer",
        type: "address"
      }
    ],
    name: "getNumBuys",
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
        name: "_buyer",
        type: "address"
      },
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getBuyReference",
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
        name: "_buyerRef",
        type: "bytes32"
      }
    ],
    name: "getBuyAmount",
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
        name: "_buyerRef",
        type: "bytes32"
      }
    ],
    name: "getBuyAddress",
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
        name: "_buyerRef",
        type: "bytes32"
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
        name: "_buyerRef",
        type: "bytes32"
      }
    ],
    name: "getBuy",
    outputs: [
      {
        components: [
          {
            name: "amountWEI",
            type: "uint256"
          },
          {
            name: "depositRef",
            type: "bytes32"
          },
          {
            name: "account",
            type: "address"
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
