import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LinearProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
//import { Select } from 'formik-material-ui'

import { getDictEntries } from '../../../../components/io/dict'

import { TextField, Select } from "material-ui-formik-components"
import { DepositPicker } from '../../../../components/io/depositPicker'

import { ApplicationState } from '../../../../store'
import { ActionProps } from '../../../../store/types'
import { BuyProps, DepositReportProps, DepositReport, DepositProps } from '../../../../store/exchanger/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { makeBuy } from '../../../../store/exchanger/writer/buy/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { Buy as BuyStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const buySchema = Yup.object().shape({
  depositRef: Yup
    .string()
    .required('Required'),
  amount: Yup
    .number()
    .required('Required'),
})

interface BuyDepositProps {
  deposits: DepositReport
}

export interface BuyDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type BuyFormProps = BuyDepositProps & BuyDispatchProps

export class BuyForm extends React.Component<BuyFormProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: BuyFormProps) {
   super(props)
  }

  handleSubmit = (values: BuyProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  getAmountsData = (deposits: DepositReport): BuyProps  => {

    let newAmounts: BuyProps = {
      account: "",
      buyRef: "",
      depositRef: "",
      currency: "",
      rate: 0,
      amount: 0
    }
    if ( typeof deposits.data != 'undefined' )
    {
      const thisDeposit = deposits.data[0] as DepositProps
      //console.log(thisDate.getDay(), thisDate.getMonth(), thisDate.getFullYear())
      newAmounts.depositRef = thisDeposit.depositRef as string,
      newAmounts.currency =  thisDeposit.currency as string,
      newAmounts.rate = 0,
      newAmounts.amount =  thisDeposit.amount as number
    }

    return newAmounts
  }

  render() {

    const thisAmount: BuyProps  = this.getAmountsData(this.props.deposits)

    return (
      <div>
        <h2>{BuyStrings.heading}</h2>
        <div>
          <Formik
            initialValues={ { account: "",
                              buyRef: thisAmount.buyRef,
                              depositRef: thisAmount.depositRef,
                              currency: thisAmount.currency,
                              rate: 0,
                              amount: thisAmount.amount
                            }}
            enableReinitialize={true}
            validationSchema={buySchema}
            onSubmit={(values: BuyProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<BuyProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <DepositPicker
                    setValue={formProps.setFieldValue}
                    name='depositRef'
                    label={BuyStrings.depositRef}
                  />
                  <ErrorMessage name='depositRef' />
                  <Field
                    name="currency"
                    label={BuyStrings.currency}
                    component={TextField}
                  />
                  <ErrorMessage name='currency' />
                  <Field
                    name='amount'
                    label={BuyStrings.amount}
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

const mapStateToProps = (state: ApplicationState): BuyDepositProps => {
  return {
    deposits:  state.reader.data as DepositReport
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): BuyDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(makeBuy(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const BuyWriter = connect<BuyDepositProps, BuyDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(BuyForm)
