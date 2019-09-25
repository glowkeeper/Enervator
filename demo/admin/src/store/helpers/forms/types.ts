import { PayloadProps } from '../../types'

export interface FormData {
  submitFunc: Function
  resetFunc: Function
}

export interface FormProps extends PayloadProps {
  data: FormData
}

export const enum FormActionTypes {
  FORMFUNCTION_SUCCESS = '@@IATIReportActionTypes/FORMFUNCTION_SUCCESS',
  FORMFUNCTION_FAILURE = '@@IATIReportActionTypes/FORMFUNCTION_FAILURE'
}
