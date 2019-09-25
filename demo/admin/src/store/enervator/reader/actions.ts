import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../store'

import { read } from '../../actions'

import { ActionProps, PayloadProps } from '../../types'
import { IATIReportActionTypes } from '../types'

export const initialise = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {
    await dispatch(read({data: { data: {} }})(IATIReportActionTypes.REPORT_INIT))
  }
}
