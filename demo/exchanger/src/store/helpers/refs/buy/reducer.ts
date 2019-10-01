import { ActionProps } from '../../../types'
import { RefActionTypes, BuyRefProps, BuyRefData } from '../types'

const initialState: BuyRefProps = {
  data: {
    refs: [],
  }
}

export const reducer = (state: BuyRefProps = initialState, action: ActionProps): BuyRefProps => {

  switch (action.type) {
    case RefActionTypes.BUY_SUCCESS:
    {
      const data = (action.payload.data as BuyRefData)
      return {...state, ...data}
    }
    default:
      return state
  }
}
