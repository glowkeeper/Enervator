import { ActionProps } from '../../../types'
import { RefActionTypes, DepositRefProps, DepositRefData } from '../types'

const initialState: DepositRefProps = {
  data: {
    refs: [],
  }
}

export const reducer = (state: DepositRefProps = initialState, action: ActionProps): DepositRefProps => {

  switch (action.type) {
    case RefActionTypes.DEPOSIT_SUCCESS:
    {
      const data = (action.payload.data as DepositRefData)
      return {...state, ...data}
    }
    default:
      return state
  }
}
