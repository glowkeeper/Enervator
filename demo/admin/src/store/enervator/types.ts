import { PayloadProps } from '../types'

/* Exchange Rates */

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

/* Enervator Types */

export interface NameProps
{
  name: string
}

export interface SymbolProps
{
  symbol: string
}

export interface SupplyProps
{
  supply: number
}

export interface PricePerMWhProps
{
  pricePerMWh: number
}

export interface PerCapitaEnergyProps
{
  perCapitaEnergy: number
}

export interface TPESProps
{
  tPES: number
}

export interface UnitValueProps
{
  unitValue: number
}

export interface EnervatorProps
{
  tokenName: string
  tokenSymbol: string
  totalSupply: number
  pricePerMWh: number
  currentTPES: number
  oldTPES: number
  perCapitaEnergy: number
  unitValue: number
}

export interface EnervatorReport
{
  data: Array<EnervatorProps>
}

export interface EnervatorReportProps extends PayloadProps
{
  data: EnervatorReport
}

/* Action Types */

export const enum WriterActionTypes {
  TX_INIT =  '@@WriterActionTypes/TX_INIT',
  RATE_SUCCESS = '@@WriterActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@WriterActionTypes/RATE_FAILURE',
  SUPPLY_SUCCESS = '@@WriterActionTypes/SUPPLY_SUCCESS',
  SUPPLY_FAILURE = '@@WriterActionTypes/SUPPLY_FAILURE',
  TPES_SUCCESS = '@@WriterActionTypes/TPES_SUCCESS',
  TPES_FAILURE = '@@WriterActionTypes/TPES_FAILURE',
  CAPITA_SUCCESS = '@@WriterActionTypes/CAPITA_SUCCESS',
  CAPITA_FAILURE = '@@WriterActionTypes/CAPITA_FAILURE'
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  REPORT_SUCCESS = '@@ReaderActionTypes/REPORT_SUCCESS',
  REPORT_FAILURE = '@@ReaderActionTypes/REPORT_FAILURE',
  RATE_SUCCESS = '@@ReaderActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@ReaderActionTypes/RATE_FAILURE',
  SUPPLY_SUCCESS = '@@ReaderActionTypes/SUPPLY_SUCCESS',
  SUPPLY_FAILURE = '@@ReaderActionTypes/SUPPLY_FAILURE',
  TPES_SUCCESS = '@@ReaderActionTypes/TPES_SUCCESS',
  TPES_FAILURE = '@@ReaderActionTypes/TPES_FAILURE',
  CAPITA_SUCCESS = '@@ReaderActionTypes/CAPITA_SUCCESS',
  CAPITA_FAILURE = '@@ReaderActionTypes/CAPITA_FAILURE'
}
