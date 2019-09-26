import { Action } from 'redux'

export interface TxData {
  summary: string,
  info: object
}

export interface TxReport {
  [tx: string]: TxData
}

export interface TxProps extends PayloadProps {
  data: TxReport
}

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}
