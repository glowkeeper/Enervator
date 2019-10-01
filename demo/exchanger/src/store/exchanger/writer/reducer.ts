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
    case WriterActionTypes.DEPOSIT_SUCCESS:
    case WriterActionTypes.DEPOSIT_FAILURE:
    case WriterActionTypes.BUY_SUCCESS:
    case WriterActionTypes.BUY_FAILURE:
    {
      const data = (action.payload.data as PayloadProps)
      return { ...state, ...data }
    }
    default:
      return state
  }
}
