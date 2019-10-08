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
import { SupplyProps } from '../../../../store/enervator/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { setSupply } from '../../../../store/enervator/writer/tokenSupply/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { TokenSupply as TokenSupplyStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const supplySchema = Yup.object().shape({
  supply: Yup
    .number()
    .positive('Supply needs to be greater than 0')
    .required('Required'),
})

export interface SupplyDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type SupplyFormProps = SupplyDispatchProps

export class SupplyForm extends React.Component<SupplyFormProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: SupplyFormProps) {
   super(props)
  }

  handleSubmit = (values: SupplyProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  render() {

    return (
      <div>
        <h2>{TokenSupplyStrings.headingSupplyWriter}</h2>
        <div>
          <Formik
            initialValues={ {supply: 0
                            }}
            enableReinitialize={true}
            validationSchema={supplySchema}
            onSubmit={(values: SupplyProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<SupplyProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <Field
                    name='supply'
                    label={TokenSupplyStrings.supply}
                    component={TextField}
                  />
                  <ErrorMessage name='supply' />
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

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): SupplyDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(setSupply(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const SupplyWriter = connect<null, SupplyDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(SupplyForm)
