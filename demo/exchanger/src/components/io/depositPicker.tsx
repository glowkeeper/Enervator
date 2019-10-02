import * as React from 'react'

import * as Yup from 'yup'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { ApplicationState } from '../../store'
import { ActionProps } from '../../store/types'

import { Field, ErrorMessage, FieldProps } from 'formik'
import { Select } from "material-ui-formik-components"

import { getDepositRefs } from '../../store/helpers/refs/deposit/actions'
import { getDepositsRecord } from '../../store/exchanger/reader/deposit/actions'

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
  getDepositsRecord: (depositRef: string) => void
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
            this.props.setValue(this.props.name, ev.target.value)
            this.props.getDepositsRecord(ev.target.value)
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
    depositRefs: state.depositRefs.data.refs as Array<string>
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): DepositDispatchProps => {
  return {
    getDepositRefs: () => dispatch(getDepositRefs()),
    getDepositsRecord: (depositRef: string) => dispatch(getDepositsRecord({depositsRef: depositRef})),
  }
}

export const DepositPicker = connect<DepositDataProps, DepositDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Deposit)
