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
import { ExchangeRateProps } from '../../../../store/enervator/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { setExchangeRate } from '../../../../store/enervator/writer/exchangeRate/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { ExchangeRates as ExchangeRateStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const exchangeRateSchema = Yup.object().shape({
  currency: Yup
    .string()
    .required('Required'),
  rate: Yup
    .number()
    .required('Required'),
})

export interface ExchangeRateDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type ExchangeRateFormProps = ExchangeRateDispatchProps

export class ExchangeRateForm extends React.Component<ExchangeRateDispatchProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: ExchangeRateFormProps) {
   super(props)
  }

  handleSubmit = (values: ExchangeRateProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  render() {

    return (
      <div>
        <h2>{ExchangeRateStrings.headingExchangeRateWriter}</h2>
        <div>
          <Formik
            initialValues={ {currency: "",
                            rate: 0
                            }}
            enableReinitialize={true}
            validationSchema={exchangeRateSchema}
            onSubmit={(values: ExchangeRateProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<ExchangeRateProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <Field
                    name="currency"
                    label={ExchangeRateStrings.currency}
                    component={Select}
                    options={Helpers.currencyCodes}
                  />
                  <ErrorMessage name='currency' />
                  <Field
                    name='rate'
                    label={ExchangeRateStrings.rate}
                    component={TextField}
                  />
                  <ErrorMessage name='value' />
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

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): ExchangeRateDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(setExchangeRate(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const ExchangeRateWriter = connect<null, ExchangeRateDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(ExchangeRateForm)
