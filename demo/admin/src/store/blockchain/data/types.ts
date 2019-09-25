import { PayloadProps } from '../../types'

export interface ChainDataProps extends PayloadProps {
  data: {
    Name: string
    ChainId: string
    ENS: string
    provider: object
  }
}

export const enum ChainDataActionTypes {
  ADD_DATA = '@@ChainInfoAction/ADD_DATA'
}
