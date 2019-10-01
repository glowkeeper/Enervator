import { PayloadProps } from '../types'

/* Deposit */

export interface DepositProps
{
  address: string,
  depositRef: string,
  currency: string,
  amount: number
}

/* Buy */

export interface BuyProps
{
  address: string,
  buyRef: string,
  depositRef: string,
  amount: number
}

/* Action Types */

export const enum WriterActionTypes {
  TX_INIT =  '@@WriterActionTypes/TX_INIT',
  DEPOSIT_SUCCESS = '@@WriterActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@WriterActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@WriterActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@WriterActionTypes/BUY_FAILURE'
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT'
}
