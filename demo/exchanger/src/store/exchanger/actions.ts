import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../store'

import { storeAction } from '../actions'

import { initialise as txInitialise } from './writer/actions'
import { initialise as readDataInitialise } from './reader/actions'

import { ActionProps, PayloadProps } from '../types'
import { ReaderActionTypes } from './types'

export const initialise = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {
    await dispatch(txInitialise())
    await dispatch(readDataInitialise())
  }
}
