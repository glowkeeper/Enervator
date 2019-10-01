import { PayloadProps } from '../types'

/* Deposit */

export interface DepositProps
{
  address: string,
  depositRef: string,
  currency: string,
  amount: number
}

export interface DepositReport
{
  data: Array<DepositProps>
}

export interface DepositReportProps extends PayloadProps
{
  data: DepositReport
}

/* Buy */

export interface BuyProps
{
  address: string,
  buyRef: string,
  depositRef: string,
  amount: number
}

export interface BuyReport
{
  data: Array<BuyProps>
}

export interface BuyReportProps extends PayloadProps
{
  data: BuyReport
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
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  DEPOSIT_SUCCESS = '@@ReaderActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@ReaderActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@ReaderActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@ReaderActionTypes/BUY_FAILURE'
}
