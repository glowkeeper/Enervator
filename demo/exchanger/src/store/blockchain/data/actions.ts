import { storeAction } from '../../actions'
import { ChainDataProps } from './types'
import { ChainDataActionTypes } from './types'

export const addData = (payload: ChainDataProps) => storeAction(ChainDataActionTypes.ADD_DATA)(payload)
