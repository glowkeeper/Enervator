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
import { BuyProps,
         DepositReportProps,
         DepositReport,
         DepositProps,
         ExchangeRateReport,
         ExchangeRateProps,
         UnitValueProps } from '../../../../store/exchanger/types'

import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { getExchangeRateRecord } from '../../../../store/exchanger/reader/exchangeRates/actions'
import { getUnitValue } from '../../../../store/exchanger/reader/unitValue/actions'
import { makeBuy } from '../../../../store/exchanger/writer/buy/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { Buy as BuyStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const buySchema = Yup.object().shape({
  depositRef: Yup
    .string()
    .required('Required'),
  currency: Yup
    .string()
    .required('Required'),
  rate: Yup
    .number()
    .positive('Currency to US$ exchange rate needs to be greater than 0')
    .required('Required'),
  unitValue: Yup
    .number()
    .positive('EOR value must be greater than 0')
    .required('Required'),
  eORRate: Yup
    .number()
    .positive('Currency to EOR exchange rate needs to be greater than 0')
    .required('Required'),
  amountEOR: Yup
    .number()
    .positive('Amount EOR to buy needs to be greater than 0')
    .required('Required'),
  amount: Yup
    .number()
    .positive('Amount FIAT needs to be greater than 0')
    .required('Required'),
})

interface BuyDepositProps
{
  deposits: DepositReport
  rates: ExchangeRateReport
  unitValue: UnitValueProps
}

interface BuyDispatchProps
{
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
  getExchangeRate: (currency: string) => void
  getUnitValue: () => void
}

type BuyFormProps = BuyDepositProps & BuyDispatchProps

class BuyForm extends React.Component<BuyFormProps> {

   static buyData: BuyProps = {
    account: "",
    buyRef: "",
    depositRef: "",
    currency: "",
    rate: 0,
    unitValue: 0,
    eORRate: 0,
    amountEOR: 0,
    amount: 0
  }

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {},
    getExchangeRate: (currency: string) => {},
    getUnitValue: () => {}
  }

  constructor (props: BuyFormProps)
  {
    super(props)
    this.initialise()
  }

  componentDidUpdate (previousProps: BuyFormProps )
  {
    //console.log('Activity Dates: ', this.props.activityRef, this.props.activitiesRef)
    if ( previousProps.deposits != this.props.deposits )
    {
      if ( typeof this.props.deposits.data != 'undefined' )
      {
        const thisDeposit =  this.props.deposits.data[0] as DepositProps

        //console.log(thisDate.getDay(), thisDate.getMonth(), thisDate.getFullYear())
        BuyForm.buyData.depositRef = thisDeposit.depositRef
        BuyForm.buyData.currency =thisDeposit.currency
        BuyForm.buyData.amount = thisDeposit.amount

        this.props.getExchangeRate( thisDeposit.currency )
      }
    }

    if ( previousProps.rates != this.props.rates )
    {
      if ( typeof this.props.rates.data != 'undefined' )
      {
        const thisRate = this.props.rates.data[0] as ExchangeRateProps
        //console.log(thisDate.getDay(), thisDate.getMonth(), thisDate.getFullYear())
        BuyForm.buyData.rate = Math.round( ( thisRate.rate ) * 100 + Number.EPSILON ) / 100

        this.props.getUnitValue()
      }
    }

    if ( previousProps.unitValue != this.props.unitValue )
    {
      const unitValue = this.props.unitValue.unitValue
      const rate = BuyForm.buyData.rate
      const amount = BuyForm.buyData.amount

      //console.log ( unitValue, rate, amount )
      if ( ( unitValue > 0 ) && ( rate > 0 )  && ( amount > 0 )  )
      {
        const exchangeRate = unitValue * rate
        BuyForm.buyData.unitValue = Math.round( ( unitValue ) * 100 + Number.EPSILON ) / 100
        BuyForm.buyData.eORRate = Math.round( ( exchangeRate ) * 100 + Number.EPSILON ) / 100 
        BuyForm.buyData.amountEOR = Math.round( ( amount / exchangeRate ) * 100 + Number.EPSILON ) / 100
        this.forceUpdate()
      }
    }
  }

  handleSubmit = (values: BuyProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
    this.initialise()
  }

  initialise = () => {
    BuyForm.buyData = {
     account: "",
     buyRef: "",
     depositRef: "",
     currency: "",
     rate: 0,
     unitValue: 0,
     eORRate: 0,
     amountEOR: 0,
     amount: 0
   }
  }

  render() {

    return (
      <div>
        <h2>{BuyStrings.heading}</h2>
        <div>
          <Formik
            initialValues={ { account: "",
                              buyRef: "",
                              depositRef: BuyForm.buyData.depositRef,
                              currency: BuyForm.buyData.currency,
                              rate: BuyForm.buyData.rate,
                              unitValue: BuyForm.buyData.unitValue,
                              eORRate: BuyForm.buyData.eORRate,
                              amountEOR: BuyForm.buyData.amountEOR,
                              amount: BuyForm.buyData.amount
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
                    disabled={true}
                    name="currency"
                    label={BuyStrings.currency}
                    component={TextField}
                  />
                  <ErrorMessage name='currency' />
                  <Field
                    disabled={true}
                    name='amount'
                    label={BuyStrings.amount}
                    component={TextField}
                  />
                  <ErrorMessage name='amount' />
                  <Field
                    disabled={true}
                    name='rate'
                    label={BuyStrings.rate}
                    component={TextField}
                  />
                  <ErrorMessage name='rate' />
                  <Field
                    disabled={true}
                    name='unitValue'
                    label={BuyStrings.unitValue}
                    component={TextField}
                  />
                  <ErrorMessage name='unitValue' />
                  <Field
                    disabled={true}
                    name='eORRate'
                    label={BuyStrings.eORRate}
                    component={TextField}
                  />
                  <ErrorMessage name='eORRate' />
                  <Field
                    disabled={true}
                    name='amountEOR'
                    label={BuyStrings.amountEOR}
                    component={TextField}
                  />
                  <ErrorMessage name='amountEOR' />
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
    deposits:  state.deposits.data as DepositReport,
    rates: state.rates.data as ExchangeRateReport,
    unitValue: state.unitValue.data as UnitValueProps
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): BuyDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(makeBuy(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps)),
    getExchangeRate: (currency: string) => dispatch(getExchangeRateRecord({currency: currency})),
    getUnitValue: () => dispatch(getUnitValue()),
  }
}

export const BuyWriter = connect<BuyDepositProps, BuyDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(BuyForm)
