import { combineReducers, Reducer, Store, createStore, applyMiddleware, Action } from 'redux'
import ReduxThunk, { ThunkDispatch } from 'redux-thunk'

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

/*
ERROR in [at-loader] ./src/store/store.ts:68:3
    TS2322: Type 'Store<ApplicationState, ActionProps> & { dispatch: unknown; }' is not assignable to type 'Store<ApplicationState, AnyAction>'.
  Types of property 'dispatch' are incompatible.
    Type 'Dispatch<ActionProps>' is not assignable to type 'Dispatch<AnyAction>'.
      Property 'payload' is missing in type 'AnyAction' but required in type 'ActionProps'.
*/

//export type ThunkResult<R> = ThunkAction<R, ApplicationState, {}, ActionProps>

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

const initialState: ApplicationState = {
  chainInfo: {
    data: {
      Name: '',
      ChainId: '',
      ENS: '',
      provider: {},
    }
  },
  chainAccount: {
    data: {
      account: ""
    }
  },
  chainContracts: {
    data: {
      contracts: {
        enervatorManager: {},
        deposit: {},
        forex: {},
        buy: {},
        exchange: {}
      }
    }
  },
  info: {
    data: {
      about: {
        title: "",
        data: ""
      },
      help: {
        title: "",
        data: ""
      },
      home: {
        title: "",
        data: ""
      },
      overview: {
        title: "Blah",
        data: "for fek"
      }
    }
  },
  keys: {
    data: {
      org: '',
      organisations: '',
      organisation: '',
      organisationBudget: '',
      organisationCountryBudget: '',
      organisationDoc: '',
      organisationExpenditure: '',
      organisationRecipientBudget: '',
      organisationRegionBudget: '',
      activities: '',
      activity: '',
      activityAdditional: '',
      activityDate: '',
      activityParticipatingOrg: '',
      activitySector: '',
      activityBudget: '',
      activityTerritory: '',
      activityTransaction: '',
      activityRelatedActivity: ''
    }
  },
  forms: {
    data: {
      submitFunc: (function(submit: boolean) { return submit }),
      resetFunc: (function() { return null })
    }
  },
  writer: {
    data: {}
  },
  reader: {
    data: {}
  }
}

export const rootReducer: Reducer = combineReducers({
  chainInfo: chainDataReducer,
  chainAccount: chainAccountReducer,
  chainContracts: chainContractReducer,
  info: infoReducer,
  keys: keyReducer,
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
