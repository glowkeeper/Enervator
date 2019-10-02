import { PayloadProps } from '../types'

/* Deposit */

export interface BlockchainDepositProps
{
  currency: string,
  amount: number,
  address: string,
  bool: boolean
}

export interface DepositProps
{
  depositRef: string
  currency: string,
  amount: number,
  address: string
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

export interface BlockchainBuyProps
{
  amount: number,
  depositRef: string,
  account: string
}

export interface BuyProps
{
  account: string,
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
