import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../actions'

import { ActionProps, PayloadProps } from '../../types'
import { FormActionTypes, FormData } from './types'

export const setFormFunctions = (formProps: FormData) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>) => {
    const formFunctions: FormData = {
      submitFunc: formProps.submitFunc,
      resetFunc: formProps.resetFunc
    }
    await dispatch(write({data: formFunctions})(FormActionTypes.FORMFUNCTION_SUCCESS))
  }
}
