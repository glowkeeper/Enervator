import { combineReducers, Reducer, Store, createStore, applyMiddleware, Action } from 'redux'
import ReduxThunk, { ThunkDispatch } from 'redux-thunk'

import { ActionProps, PayloadProps, TxProps } from './types'

import { BuyRefProps } from './helpers/refs/types'
import { DepositRefProps } from './helpers/refs/types'
import { FormProps } from './helpers/forms/types'

import { InfoPageProps } from './info/types'
import { ChainDataProps } from  './blockchain/data/types'
import { AccountProps } from  './blockchain/account/types'
import { ContractProps } from  './blockchain/contracts/types'

import { reducer as buyRefReducer } from './helpers/refs/buy/reducer'
import { reducer as depositRefReducer } from './helpers/refs/deposit/reducer'
import { reducer as formReducer } from './helpers/forms/reducer'

import { reducer as chainDataReducer } from './blockchain/data/reducer'
import { reducer as chainAccountReducer } from './blockchain/account/reducer'
import { reducer as chainContractReducer } from './blockchain/contracts/reducer'
import { reducer as infoReducer } from './info/reducer'
import { reducer as writerReducer } from './exchanger/writer/reducer'
import { reducer as readerReducer } from './exchanger/reader/reducer'

const initialState = (window as any).initialReduxState

export interface ApplicationState {
  chainInfo: ChainDataProps
  chainAccount: AccountProps
  chainContracts: ContractProps
  info: InfoPageProps
  buyRefs: BuyRefProps
  depositRefs: DepositRefProps
  forms: FormProps
  writer: PayloadProps
  reader: PayloadProps
}

export const rootReducer: Reducer = combineReducers({
  chainInfo: chainDataReducer,
  chainAccount: chainAccountReducer,
  chainContracts: chainContractReducer,
  info: infoReducer,
  buyRefs: buyRefReducer,
  depositRefs: depositRefReducer,
  forms: formReducer,
  writer: writerReducer,
  reader: readerReducer
})

export function configureStore()
{

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}
