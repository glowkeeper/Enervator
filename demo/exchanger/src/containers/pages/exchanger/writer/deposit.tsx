import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LinearProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
//import { Select } from 'formik-material-ui'
import { TextField, Select } from "material-ui-formik-components"

import { ApplicationState } from '../../../../store'
import { ActionProps } from '../../../../store/types'
import { DepositProps } from '../../../../store/exchanger/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { makeDeposit } from '../../../../store/exchanger/writer/deposit/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { Deposit as DepositStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const depositSchema = Yup.object().shape({
  currency: Yup
    .string()
    .required('Required'),
  amount: Yup
    .number()
    .positive('Amount FIAT needs to be greater than 0')
    .required('Required'),
})

export interface DepositDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type DepositFormProps = DepositDispatchProps

export class DepositForm extends React.Component<DepositFormProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: DepositFormProps) {
   super(props)
  }

  handleSubmit = (values: DepositProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  render() {

    return (
      <div>
        <h2>{DepositStrings.heading}</h2>
        <div>
          <Formik
            initialValues={ { address: "",
                              depositRef: "",
                              currency: "",
                              amount: 0
                            }}
            enableReinitialize={true}
            validationSchema={depositSchema}
            onSubmit={(values: DepositProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<DepositProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <Field
                    name="currency"
                    label={DepositStrings.currency}
                    component={Select}
                    options={Helpers.currencyCodes}
                  />
                  <ErrorMessage name='currency' />
                  <Field
                    name='amount'
                    label={DepositStrings.amount}
                    component={TextField}
                  />
                  <ErrorMessage name='amount' />
                  <br />
                  {formProps.isSubmitting && <LinearProgress />}
                  <br />
                  <Button type='submit' color="primary" disabled={formProps.isSubmitting}>
                    Submit
                  </Button>
                </FormControl>
              </Form>
            )}
          />
        </div>
        <TransactionHelper/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): DepositDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(makeDeposit(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const DepositWriter = connect<null, DepositDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(DepositForm)
