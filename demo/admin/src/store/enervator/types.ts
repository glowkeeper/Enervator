import { PayloadProps } from '../types'

/* Exchange Rates */

interface ExchangeRateProps
{
  currency: string
  rate: number
}

export interface ExchangeRateReport
{
  organisationsRef: string
  data: Array<ExchangeRateProps>
}

export interface ExchangeRateReportProps extends PayloadProps
{
  data: ExchangeRateReport
}

/* Enervator Types */

interface NameProps
{
  name: string
}

interface SymbolProps
{
  symbol: string
}

interface SupplyProps
{
  supply: number
}

interface PricePerMWhProps
{
  pricePerMWh: number
}

interface PerCapitaEnergyProps
{
  perCapitaEnergy: number
}

interface TPESProps
{
  tPES: number
}

interface UnitValueProps
{
  unitValue: number
}

interface EnervatorProps
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
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  RATE_SUCCESS = '@@ReaderActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@ReaderActionTypes/RATE_FAILURE'
}
