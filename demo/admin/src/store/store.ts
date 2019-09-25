import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
import ReduxThunk, { ThunkAction } from 'redux-thunk'

import { ActionProps, PayloadProps, TxProps } from './types'

import { KeyProps } from './helpers/keys/types'
import { FormProps } from './helpers/forms/types'

import { InfoPageProps } from './info/types'
import { ChainDataProps } from  './blockchain/data/types'
import { AccountProps } from  './blockchain/account/types'
import { ContractProps } from  './blockchain/contracts/types'

import { reducer as keyReducer } from './helpers/keys/reducer'
import { reducer as formReducer } from './helpers/forms/reducer'

import { reducer as chainDataReducer } from './blockchain/data/reducer'
import { reducer as chainAccountReducer } from './blockchain/account/reducer'
import { reducer as chainContractReducer } from './blockchain/contracts/reducer'
import { reducer as infoReducer } from './info/reducer'
import { reducer as writerReducer } from './enervator/writer/reducer'
import { reducer as readerReducer } from './enervator/reader/reducer'

export type ThunkResult<R> = ThunkAction<R, ApplicationState, null, any>

export interface ApplicationState {
  chainInfo: ChainDataProps
  chainAccount: AccountProps
  chainContracts: ContractProps
  info: InfoPageProps
  keys: KeyProps
  forms: FormProps
  writer: PayloadProps
  reader: PayloadProps
}

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  chainInfo: chainDataReducer,
  chainAccount: chainAccountReducer,
  chainContracts: chainContractReducer,
  info: infoReducer,
  keys: keyReducer,
  forms: formReducer,
  writer: writerReducer,
  reader: readerReducer
})

export function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {

  // create the redux-saga middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}
