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
    case WriterActionTypes.RATE_SUCCESS: {
      const data = (action.payload.data as PayloadProps)
      return { ...state, ...data }
    }
    case WriterActionTypes.RATE_FAILURE:
    default:
      return state
  }
}
