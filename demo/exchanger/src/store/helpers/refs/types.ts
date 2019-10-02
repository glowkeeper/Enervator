import { PayloadProps } from '../../types'

export interface DepositRefData {
  refs: Array<string>
}


export interface DepositRefProps extends PayloadProps {
  data: DepositRefData
}

export interface BuyRefData {
  refs: Array<string>
}

export interface BuyRefProps extends PayloadProps {
  data: BuyRefData
}


export const enum RefActionTypes {
  DEPOSIT_SUCCESS = '@@RefActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@RefActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@RefActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@RefActionTypes/BUY_FAILURE'
}
