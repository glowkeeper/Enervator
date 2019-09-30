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
import { PerCapitaEnergyProps } from '../../../../store/enervator/types'
import { FormData } from '../../../../store/helpers/forms/types'

import { setFormFunctions } from '../../../../store/helpers/forms/actions'
import { setPerCapitaEnergy } from '../../../../store/enervator/writer/perCapitaEnergy/actions'

import { TransactionHelper } from '../../../io/transactionHelper'

import { PerCapitaEnergy as PerCapitaEnergyStrings } from '../../../../utils/strings'
import { Helpers } from '../../../../utils/config'

const PerCapitaEnergySchema = Yup.object().shape({
  perCapitaEnergy: Yup
    .number()
    .required('Required'),
})

export interface PerCapitaEnergyDispatchProps {
  handleSubmit: (values: any) => void
  setFormFunctions: (formProps: FormData) => void
}

type PerCapitaEnergyFormProps = PerCapitaEnergyDispatchProps

export class PerCapitaEnergyForm extends React.Component<PerCapitaEnergyFormProps> {

  public static defaultProps = {
    handleSubmit: (values: any) => {},
    setFormFunctions: (formProps: FormData) => {}
  }

  constructor (props: PerCapitaEnergyFormProps) {
   super(props)
  }

  handleSubmit = (values: PerCapitaEnergyProps, setSubmitting: Function, reset: Function) => {
    this.props.setFormFunctions({submitFunc: setSubmitting, resetFunc: reset})
    this.props.handleSubmit(values)
  }

  render() {

    return (
      <div>
        <h2>{PerCapitaEnergyStrings.headingPerCapitaEnergyWriter}</h2>
        <div>
          <Formik
            initialValues={ {perCapitaEnergy: 0
                            }}
            enableReinitialize={true}
            validationSchema={PerCapitaEnergySchema}
            onSubmit={(values: PerCapitaEnergyProps, actions: any) => {
              this.handleSubmit(values, actions.setSubmitting, actions.resetForm)
            }}
            render={(formProps: FormikProps<PerCapitaEnergyProps>) => (
              <Form>
                <FormControl fullWidth={true}>
                  <Field
                    name='perCapitaEnergy'
                    label={PerCapitaEnergyStrings.perCapitaEnergy}
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

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): PerCapitaEnergyDispatchProps => {
  return {
    handleSubmit: (ownProps: any) => dispatch(setPerCapitaEnergy(ownProps)),
    setFormFunctions: (formProps: FormData) => dispatch(setFormFunctions(formProps))
  }
}

export const PerCapitaEnergyWriter = connect<null, PerCapitaEnergyDispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(PerCapitaEnergyForm)
