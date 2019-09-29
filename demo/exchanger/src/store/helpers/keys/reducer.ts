import { ActionProps } from '../../types'
import { KeyActionTypes, KeyProps, KeyData } from './types'

const initialState: KeyProps = {
  data: {
    org: '',
    organisations: '',
    organisation: '',
    organisationBudget: '',
    organisationCountryBudget: '',
    organisationDoc: '',
    organisationExpenditure: '',
    organisationRecipientBudget: '',
    organisationRegionBudget: '',
    activities: '',
    activity: '',
    activityAdditional: '',
    activityDate: '',
    activityParticipatingOrg: '',
    activitySector: '',
    activityBudget: '',
    activityTerritory: '',
    activityTransaction: '',
    activityRelatedActivity: ''
  }
}

export const reducer = (state: KeyProps = initialState, action: ActionProps): KeyProps => {

  switch (action.type) {
    case KeyActionTypes.NEW_SUCCESS: {
      const data = action.payload as KeyProps
      return data
    }
    case KeyActionTypes.ORG_SUCCESS:
    case KeyActionTypes.ORGANISATIONS_SUCCESS:
    case KeyActionTypes.ORGANISATION_SUCCESS:
    case KeyActionTypes.ORGANISATIONBUDGET_SUCCESS:
    case KeyActionTypes.ORGANISATIONCOUNTRYBUDGET_SUCCESS:
    case KeyActionTypes.ORGANISATIONDOC_SUCCESS:
    case KeyActionTypes.ORGANISATIONEXPENDITURE_SUCCESS:
    case KeyActionTypes.ORGANISATIONRECIPIENTBUDGET_SUCCESS:
    case KeyActionTypes.ORGANISATIONREGIONBUDGET_SUCCESS:
    case KeyActionTypes.ACTIVITIES_SUCCESS:
    case KeyActionTypes.ACTIVITY_SUCCESS:
    case KeyActionTypes.ACTIVITYADDITIONAL_SUCCESS:
    case KeyActionTypes.ACTIVITYDATE_SUCCESS:
    case KeyActionTypes.ACTIVITYPARTICIPATINGORG_SUCCESS:
    case KeyActionTypes.ACTIVITYSECTOR_SUCCESS:
    case KeyActionTypes.ACTIVITYBUDGET_SUCCESS:
    case KeyActionTypes.ACTIVITYTERRITORY_SUCCESS:
    case KeyActionTypes.ACTIVITYTRANSACTION_SUCCESS:
    case KeyActionTypes.ACTIVITYRELATEDACTIVITY_SUCCESS: {
      const data = (action.payload.data as KeyProps)
      //console.log('Here!: ', data, action.type)
      return {...state, ...data}
    }
    default:
      return state
  }
}
