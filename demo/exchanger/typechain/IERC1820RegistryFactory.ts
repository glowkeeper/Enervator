/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IERC1820Registry } from "./IERC1820Registry";

export class IERC1820RegistryFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1820Registry {
    return new Contract(address, _abi, signerOrProvider) as IERC1820Registry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        name: "interfaceHash",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "implementer",
        type: "address"
      }
    ],
    name: "InterfaceImplementerSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        name: "newManager",
        type: "address"
      }
    ],
    name: "ManagerChanged",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "newManager",
        type: "address"
      }
    ],
    name: "setManager",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "getManager",
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
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "interfaceHash",
        type: "bytes32"
      },
      {
        name: "implementer",
        type: "address"
      }
    ],
    name: "setInterfaceImplementer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "interfaceHash",
        type: "bytes32"
      }
    ],
    name: "getInterfaceImplementer",
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
        name: "interfaceName",
        type: "string"
      }
    ],
    name: "interfaceHash",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "updateERC165Cache",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address"
      },
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "implementsERC165Interface",
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
        name: "account",
        type: "address"
      },
      {
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "implementsERC165InterfaceNoCache",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
