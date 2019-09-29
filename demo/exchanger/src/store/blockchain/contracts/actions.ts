import { storeAction } from '../../actions'
import { ContractProps } from './types'
import { ChainContractActionTypes } from './types'

export const addContracts = (payload: ContractProps) => storeAction(ChainContractActionTypes.ADD_CONTRACTS)(payload)
