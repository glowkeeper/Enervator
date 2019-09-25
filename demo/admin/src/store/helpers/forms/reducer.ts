import { ActionProps } from '../../types'
import { FormActionTypes, FormProps } from './types'

const initialState: FormProps = {
  data: {
    submitFunc: (function(submit: boolean) { return submit }),
    resetFunc: (function() { return null })
  }
}

export const reducer = (state: FormProps = initialState, action: ActionProps): FormProps => {

  switch (action.type) {
    case FormActionTypes.FORMFUNCTION_SUCCESS: {
      const data = (action.payload as FormProps)
      return data
    }
    default:
      return state
  }
}
