import { PayloadProps } from '../../types'

export interface ContractProps extends PayloadProps {
  data: {
    contracts: {
      orgs: object
      organisations: object
      organisation: object
      organisationDocs: object
      organisationBudgets: object
      organisationExpenditure: object
      organisationRecipientBudgets: object
      organisationRegionBudgets: object
      organisationCountryBudgets: object
      activities: object
      activity: object
      activityAdditional: object
      activityDates: object
      activityParticipatingOrgs: object
      activitySectors: object
      activityBudgets: object
      activityTerritories: object
      activityTransactions: object
      activityRelatedActivities: object
    }
  }
}

export const enum ChainContractActionTypes {
  ADD_CONTRACTS = '@@ChainContractAction/ADD_CONTRACTS'
}
