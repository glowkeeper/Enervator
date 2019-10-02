import { ActionProps, PayloadProps } from '../../../types'
import { RefActionTypes } from '../types'

const initialState: PayloadProps = {
  data: []
}

export const reducer = (state: PayloadProps = initialState, action: ActionProps): PayloadProps => {

  switch (action.type) {
    case RefActionTypes.DEPOSIT_SUCCESS:
    {
      const data = (action.payload as PayloadProps)
      //console.log("Data!", data )
      return {...state, ...data}
    }
    default:
      return state
  }
}
