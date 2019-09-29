import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../actions'

import shortid from 'shortid'
import { ethers } from 'ethers'

import { ActionProps, PayloadProps } from '../../types'
import { KeyActionTypes, KeyTypes, KeyData, Keys } from './types'

export const setKey = (props: Keys) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {
    const state = getState()
    let keyData: KeyData = state.keys.data
    let actionType = KeyActionTypes.NEW_FAILURE

    //console.log('Setting key!')

    let key = props.key
    if (props.key == '') {
      key = ethers.utils.formatBytes32String(shortid.generate())
    }

    switch (props.keyType) {
      case KeyTypes.NEW: {
        keyData = {
          org: key,
          organisations:  key,
          organisation:  key,
          organisationBudget:  key,
          organisationCountryBudget:  key,
          organisationDoc:  key,
          organisationExpenditure:  key,
          organisationRecipientBudget:  key,
          organisationRegionBudget:  key,
          activities:  key,
          activity:  key,
          activityAdditional:  key,
          activityDate:  key,
          activityParticipatingOrg:  key,
          activitySector:  key,
          activityBudget:  key,
          activityTerritory:  key,
          activityTransaction: key,
          activityRelatedActivity: key
        }
        actionType = KeyActionTypes.NEW_SUCCESS
        break
      }
      case KeyTypes.ORG: {
        keyData.org = key
        actionType = KeyActionTypes.ORG_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONS: {
        keyData.organisations = key
        actionType = KeyActionTypes.ORGANISATIONS_SUCCESS
        break
      }
      case KeyTypes.ORGANISATION: {
        keyData.organisation = key
        actionType = KeyActionTypes.ORGANISATION_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONBUDGET: {
        keyData.organisationBudget = key
        actionType = KeyActionTypes.ORGANISATIONBUDGET_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONCOUNTRYBUDGET: {
        keyData.organisationCountryBudget = key
        actionType = KeyActionTypes.ORGANISATIONCOUNTRYBUDGET_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONDOC: {
        keyData.organisationDoc = key
        actionType = KeyActionTypes.ORGANISATIONDOC_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONEXPENDITURE: {
        keyData.organisationExpenditure = key
        actionType = KeyActionTypes.ORGANISATIONEXPENDITURE_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONRECIPIENTBUDGET: {
        keyData.organisationRecipientBudget = key
        actionType = KeyActionTypes.ORGANISATIONRECIPIENTBUDGET_SUCCESS
        break
      }
      case KeyTypes.ORGANISATIONREGIONBUDGET: {
        keyData.organisationRegionBudget = key
        actionType = KeyActionTypes.ORGANISATIONREGIONBUDGET_SUCCESS
        break
      }
      case KeyTypes.ACTIVITIES: {
        keyData.activities = key
        actionType = KeyActionTypes.ACTIVITIES_SUCCESS
        break
      }
      case KeyTypes.ACTIVITY: {
        keyData.activity = key
        actionType = KeyActionTypes.ACTIVITY_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYADDITIONAL: {
        keyData.activityAdditional = key
        actionType = KeyActionTypes.ACTIVITYADDITIONAL_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYDATE: {
        keyData.activityDate = key
        actionType = KeyActionTypes.ACTIVITYDATE_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYPARTICIPATINGORG: {
        keyData.activityParticipatingOrg = key
        actionType = KeyActionTypes.ACTIVITYPARTICIPATINGORG_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYSECTOR: {
        keyData.activitySector = key
        actionType = KeyActionTypes.ACTIVITYSECTOR_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYBUDGET: {
        keyData.activityBudget = key
        actionType = KeyActionTypes.ACTIVITYBUDGET_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYTERRITORY: {
        keyData.activityTerritory = key
        actionType = KeyActionTypes.ACTIVITYTERRITORY_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYTRANSACTION: {
        keyData.activityTransaction = key
        actionType = KeyActionTypes.ACTIVITYTRANSACTION_SUCCESS
        break
      }
      case KeyTypes.ACTIVITYRELATEDACTIVITY: {
        keyData.activityRelatedActivity = key
        actionType = KeyActionTypes.ACTIVITYRELATEDACTIVITY_SUCCESS
        break
      }
      default:
        break
    }

    await dispatch(write({data: keyData})(actionType))
  }
}
