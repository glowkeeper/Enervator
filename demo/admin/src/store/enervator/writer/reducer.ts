import { WriterActionTypes } from '../types'
import { ActionProps, PayloadProps } from '../../types'

const initialState: PayloadProps = {
  data: {}
}

export const reducer = (state: PayloadProps = initialState, action: ActionProps): PayloadProps => {

  switch (action.type) {
    case WriterActionTypes.TX_INIT: {
      const data = action.payload.data as PayloadProps
      return data
    }
    case WriterActionTypes.RATE_SUCCESS:
    case WriterActionTypes.SUPPLY_SUCCESS:    
    case WriterActionTypes.RATE_FAILURE:
    case WriterActionTypes.SUPPLY_FAILURE:
    {
      const data = (action.payload.data as PayloadProps)
      return { ...state, ...data }
    }
    default:
      return state
  }
}
