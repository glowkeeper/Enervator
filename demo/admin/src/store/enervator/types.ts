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
  tokenName: NameProps
  tokenSymbol: SymbolProps
  tokenSupply: SupplyProps
  pricePerMWh: PricePerMWhProps
  currentTPES: TPESProps
  oldTPES: TPESProps
  perCapitaEnergy: PerCapitaEnergyProps
  unitValue: UnitValueProps
}

export interface EnervatorReportProps extends PayloadProps
{
  data: EnervatorProps
}

/* Action Types */

export const enum WriterActionTypes {
  TX_INIT =  '@@WriterActionTypes/TX_INIT',
  RATE_SUCCESS = '@@WriterActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@WriterActionTypes/RATE_FAILURE',
  SUPPLY_SUCCESS = '@@WriterActionTypes/SUPPLY_SUCCESS',
  SUPPLY_FAILURE = '@@WriterActionTypes/SUPPLY_FAILURE',
  TPES_SUCCESS = '@@WriterActionTypes/TPES_SUCCESS',
  TPES_FAILURE = '@@WriterActionTypes/TPES_FAILURE'
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  RATE_SUCCESS = '@@ReaderActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@ReaderActionTypes/RATE_FAILURE',
  SUPPLY_SUCCESS = '@@ReaderActionTypes/SUPPLY_SUCCESS',
  SUPPLY_FAILURE = '@@ReaderActionTypes/SUPPLY_FAILURE',
  TPES_SUCCESS = '@@ReaderActionTypes/TPES_SUCCESS',
  TPES_FAILURE = '@@ReaderActionTypes/TPES_FAILURE'
}
