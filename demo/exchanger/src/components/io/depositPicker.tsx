import * as React from 'react'

import * as Yup from 'yup'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { ApplicationState } from '../../store'
import { ActionProps } from '../../store/types'

import { Field, ErrorMessage, FieldProps } from 'formik'
import { Select } from "material-ui-formik-components"
//import MuiSelect from '@material-ui/core/Select'

import { setRef } from '../../store/helpers/keys/actions'
import { getDepositRefs } from '../../store/exchanger/reader/deposit/actions'

import { Keys, KeyTypes } from '../../store/helpers/keys/types'

interface DepositFormProps {
  setValue: Function
  name: string
  label: string
}

interface DepositDataProps {
  depositRefs: Array<string>
}

interface DepositDispatchProps {
  getDepositRefs: () => void
  setDepositKey: (depositRef: string) => void
}

type DepositPickerProps = DepositFormProps & DepositDataProps & DepositDispatchProps

class Deposit extends React.Component<DepositPickerProps> {

  constructor (props: DepositPickerProps) {
   super(props)
  }

  componentDidMount() {
    this.props.getDepositRefs()
  }

  render() {

    let depositRefs: any[] = [{ value: "", label: "" }]
    if ( typeof this.props.depositRefs != 'undefined' &&
         typeof this.props.depositRefs[0] != 'undefined' &&
         this.props.depositRefs[0] != "" ) {
      this.props.depositRefs.forEach((key: string) => {
       depositRefs.push({ value: key, label: key })
      })
    }

    return (
      <React.Fragment>
        <Field
          name={this.props.name}
          label={this.props.label}
          component={Select}
          onChange={(ev: any) => {
            this.props.setDepositKey(ev.target.value)
            this.props.setValue(this.props.name, ev.target.value)
          }}
          options={depositRefs}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ApplicationState): DepositDataProps => {
  //console.log(state.orgReader)
  return {
    depositRefs: state.depositPicker.data as Array<string>
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): DepositDispatchProps => {
  return {
    getDepositRefs: () => dispatch(getDepositRefs()),
    setDepositKey: (depositRef: string) => dispatch(setKey({key: depositRef, keyType: KeyTypes.DEPOSIT})),
  }
}

export const DepositPicker = connect<DepositDataProps, DepositDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Deposit)
