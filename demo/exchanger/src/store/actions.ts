import { PayloadProps } from './types'

export const storeAction = (type: string) => (payload: PayloadProps): object => {
  return {
    type: type,
    payload: payload
  }
}

export const write = (payload: PayloadProps): Function => {
  return (actionType: string): PayloadProps => {
    const getProps = storeAction(actionType)(payload) as PayloadProps
    return getProps
  }
}

export const read = (payload: PayloadProps): Function => {
  return (actionType: string): PayloadProps => {
    const getProps = storeAction(actionType)(payload) as PayloadProps
    return getProps
  }
}
