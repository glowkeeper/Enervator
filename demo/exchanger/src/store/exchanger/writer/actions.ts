import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../store'

import { write } from '../../actions'

import { ActionProps, PayloadProps, TxProps, TxReport } from '../../types'
import { WriterActionTypes } from '../types'

export const initialise = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {
    const initData: TxReport = {}
    await dispatch(write({data: initData})(WriterActionTypes.TX_INIT))
  }
}
