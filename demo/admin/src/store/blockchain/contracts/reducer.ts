import { ChainContractActionTypes, ContractProps } from './types'
import { ActionProps } from '../../types'

 const initialContractState: ContractProps = {
    data: {
      contracts: {
        orgs: {},
        organisations: {},
        organisation: {},
        organisationDocs: {},
        organisationBudgets: {},
        organisationExpenditure: {},
        organisationRecipientBudgets: {},
        organisationRegionBudgets: {},
        organisationCountryBudgets: {},
        activities: {},
        activity: {},
        activityAdditional: {},
        activityDates: {},
        activityParticipatingOrgs: {},
        activitySectors: {},
        activityBudgets: {},
        activityTerritories: {},
        activityTransactions: {},
        activityRelatedActivities: {}
      }
    }
  }

export const reducer = (state: ContractProps = initialContractState, action: ActionProps): ContractProps => {
  //console.log('Account info: ', action.type, action.payload)
  if ( action.type == ChainContractActionTypes.ADD_CONTRACTS ) {
    return Object.assign({}, state, action.payload)
  } else {
    return state
  }
}
