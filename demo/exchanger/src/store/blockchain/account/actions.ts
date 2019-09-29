import { storeAction } from '../../actions'
import { AccountProps } from './types'
import { ChainAccountActionTypes } from './types'

export const addAccount = (payload: AccountProps) => storeAction(ChainAccountActionTypes.ADD_ACCOUNT)(payload)
