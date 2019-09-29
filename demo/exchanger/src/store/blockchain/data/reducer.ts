import { ChainDataActionTypes, ChainDataProps } from './types'
import { ActionProps } from '../../types'

const initialInfoState: ChainDataProps = {
  data: {
    Name: '',
    ChainId: '',
    ENS: '',
    provider: {},
  }
}

export const reducer = (state: ChainDataProps = initialInfoState, action: ActionProps): ChainDataProps => {
  //console.log('blockchain info: ', action.type, action.payload)
  if ( action.type == ChainDataActionTypes.ADD_DATA ) {
    //console.log('Chain info: ', action.payload)
    return Object.assign({}, state, action.payload)
  } else {
    return state
  }
}
