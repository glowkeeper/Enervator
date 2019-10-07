import { PayloadProps } from '../types'

/* Deposit */

export interface BlockchainDepositProps
{
  code: string,
  amount: number,
  account: string,
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
  currency: string,
  rate: number,
  amountEOR: number
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

export interface ExchangeRateProps
{
  currency: string
  rate: number
}

export interface ExchangeRateReport
{
  data: Array<ExchangeRateProps>
}

export interface ExchangeRateReportProps extends PayloadProps
{
  data: ExchangeRateReport
}

export interface ExchangeRateProps
{
  currency: string
  rate: number
}

export interface ExchangeRateReport
{
  data: Array<ExchangeRateProps>
}

export interface UnitValueProps
{
  unitValue: number
}

/* Action Types */

export const enum WriterActionTypes {
  TX_INIT =  '@@WriterActionTypes/TX_INIT',
  DEPOSIT_SUCCESS = '@@WriterActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@WriterActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@WriterActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@WriterActionTypes/BUY_FAILURE',
  FOREX_SUCCESS = '@@WriterActionTypes/FOREX_SUCCESS',
  FOREX_FAILURE = '@@WriterActionTypes/FOREX_FAILURE',
  UNITVALUE_SUCCESS = '@@WriterActionTypes/UNITVALUE_SUCCESS',
  UNITVALUE_FAILURE = '@@WriterActionTypes/UNITVALUE_FAILURE'
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  DEPOSIT_SUCCESS = '@@ReaderActionTypes/DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE = '@@ReaderActionTypes/DEPOSIT_FAILURE',
  BUY_SUCCESS = '@@ReaderActionTypes/BUY_SUCCESS',
  BUY_FAILURE = '@@ReaderActionTypes/BUY_FAILURE',
  FOREX_SUCCESS = '@@ReaderActionTypes/FOREX_SUCCESS',
  FOREX_FAILURE = '@@ReaderActionTypes/FOREX_FAILURE',
  UNITVALUE_SUCCESS = '@@ReaderActionTypes/UNITVALUE_SUCCESS',
  UNITVALUE_FAILURE = '@@ReaderActionTypes/UNITVALUE_FAILURE'
}
