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
import { TPESProps } from '../../../../store/enervator/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { setTPES } from '../../../../store/enervator/writer/TPES/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { TPES as TPESStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const TPESSchema = Yup.object().shape({
  tPES: Yup
    .number()
    .positive('TPES needs to be greater than 0')
    .required('Required'),
})

export interface TPESDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type TPESFormProps = TPESDispatchProps

export class TPESForm extends React.Component<TPESFormProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: TPESFormProps) {
   super(props)
  }

  handleSubmit = (values: TPESProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  render() {

    return (
      <div>
        <h2>{TPESStrings.headingTPESWriter}</h2>
        <div>
          <Formik
            initialValues={ {tPES: 0
                            }}
            enableReinitialize={true}
            validationSchema={TPESSchema}
            onSubmit={(values: TPESProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<TPESProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <Field
                    name='tPES'
                    label={TPESStrings.tPES}
                    component={TextField}
                  />
                  <ErrorMessage name='tPES' />
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

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): TPESDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(setTPES(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const TPESWriter = connect<null, TPESDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(TPESForm)
