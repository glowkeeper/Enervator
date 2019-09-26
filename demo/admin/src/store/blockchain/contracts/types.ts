import { PayloadProps } from '../../types'

export interface ContractProps extends PayloadProps {
  data: {
    contracts: {
      enervatorManager: object
      deposit: object
      forex: object
      buy: object
      exchange: object
    }
  }
}

export const enum ChainContractActionTypes {
  ADD_CONTRACTS = '@@ChainContractAction/ADD_CONTRACTS'
}
