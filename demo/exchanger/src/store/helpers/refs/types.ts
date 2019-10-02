import { PayloadProps } from '../../types'

export interface DepositRefProps extends PayloadProps {
  data:  Array<string>
}

export interface BuyRefData {
  refs: Array<string>
}

export interface BuyRefProps extends PayloadProps {
  data:  Array<string>
}


export const enum RefActionTypes {
  DEPOSIT_SUCCESS = '@@RefActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@RefActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@RefActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@RefActionTypes/BUY_FAILURE'
}
