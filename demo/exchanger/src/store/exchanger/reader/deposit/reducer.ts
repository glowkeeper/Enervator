import { ReaderActionTypes } from '../../types'
import { ActionProps, PayloadProps } from '../../../types'

const initialState: PayloadProps = {
  data: {}
}

export const reducer = (state: PayloadProps = initialState, action: ActionProps): PayloadProps => {

  switch (action.type) {
    case ReaderActionTypes.REPORT_INIT: {
      const data = action.payload.data as PayloadProps
      return data
    }
    case ReaderActionTypes.DEPOSIT_SUCCESS:
    {
      const data = (action.payload.data as PayloadProps)
      //console.log( "this deposit data", data)
      return {...state, ...data}
    }
    case ReaderActionTypes.DEPOSIT_FAILURE:
    default:
      return state
  }
}
