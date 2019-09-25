import { ethers } from 'ethers'
import { Store } from 'redux'

import { addContracts } from '../../store/blockchain/contracts/actions'
import { ContractProps } from '../../store/blockchain/contracts/types'

import { Contract } from '../../utils/config'

import { IATIOrgs } from '../../../blockchain/typechain/IATIOrgs'
import { IATIOrganisations } from '../../../blockchain/typechain/IATIOrganisations'
import { IATIOrganisation } from '../../../blockchain/typechain/IATIOrganisation'
import { IATIOrganisationDocs } from '../../../blockchain/typechain/IATIOrganisationDocs'
import { IATIOrganisationBudgets } from '../../../blockchain/typechain/IATIOrganisationBudgets'
import { IATIOrganisationExpenditure } from '../../../blockchain/typechain/IATIOrganisationExpenditure'
import { IATIOrganisationRecipientBudgets } from '../../../blockchain/typechain/IATIOrganisationRecipientBudgets'
import { IATIOrganisationRegionBudgets } from '../../../blockchain/typechain/IATIOrganisationRegionBudgets'
import { IATIOrganisationCountryBudgets } from '../../../blockchain/typechain/IATIOrganisationCountryBudgets'
import { IATIActivities } from '../../../blockchain/typechain/IATIActivities'
import { IATIActivity } from '../../../blockchain/typechain/IATIActivity'
import { IATIActivityAdditional } from '../../../blockchain/typechain/IATIActivityAdditional'
import { IATIActivityDates } from '../../../blockchain/typechain/IATIActivityDates'
import { IATIActivityParticipatingOrgs } from '../../../blockchain/typechain/IATIActivityParticipatingOrgs'
import { IATIActivitySectors } from '../../../blockchain/typechain/IATIActivitySectors'
import { IATIActivityBudgets } from '../../../blockchain/typechain/IATIActivityBudgets'
import { IATIActivityTerritories } from '../../../blockchain/typechain/IATIActivityTerritories'
import { IATIActivityTransactions } from '../../../blockchain/typechain/IATIActivityTransactions'
import { IATIActivityRelatedActivities } from '../../../blockchain/typechain/IATIActivityRelatedActivities'

interface ChainProps {
  store: Store
}

export const setContracts = (props: ChainProps) => {

  const store = props.store
  const state = store.getState()
  const provider = state.chainInfo.data.provider

  if ( provider.hasOwnProperty('connection') ) {
    const state = store.getState()
    const orgsContract = state.chainContracts.data.contracts.orgs
    if ( !(orgsContract.hasOwnProperty('getNumOrgs')) ) {

      const signer = provider.getSigner()
      const contractData: ContractProps = {
        data: {
          contracts: {
            orgs: new ethers.Contract(Contract.orgsAddress,
                                              Contract.orgsABI,
                                              signer) as IATIOrgs,
            organisations: new ethers.Contract(Contract.organisationsAddress,
                                                     Contract.organisationsABI,
                                                     signer) as IATIOrganisations,
            organisation: new ethers.Contract(Contract.organisationAddress,
                                                     Contract.organisationABI,
                                                     signer) as IATIOrganisation,
            organisationDocs: new ethers.Contract(Contract.organisationDocsAddress,
                                                     Contract.organisationDocsABI,
                                                     signer) as IATIOrganisationDocs,
            organisationBudgets: new ethers.Contract(Contract.organisationBudgetsAddress,
                                                     Contract.organisationBudgetsABI,
                                                     signer) as IATIOrganisationBudgets,
            organisationExpenditure: new ethers.Contract(Contract.organisationExpenditureAddress,
                                                     Contract.organisationExpenditureABI,
                                                     signer) as IATIOrganisationExpenditure,
            organisationRecipientBudgets: new ethers.Contract(Contract.organisationRecipientBudgetsAddress,
                                                     Contract.organisationRecipientBudgetsABI,
                                                     signer) as IATIOrganisationRecipientBudgets,
            organisationRegionBudgets: new ethers.Contract(Contract.organisationRegionBudgetsAddress,
                                                     Contract.organisationRegionBudgetsABI,
                                                     signer) as IATIOrganisationRegionBudgets,
            organisationCountryBudgets: new ethers.Contract(Contract.organisationCountryBudgetsAddress,
                                                     Contract.organisationCountryBudgetsABI,
                                                     signer) as IATIOrganisationCountryBudgets,
            activities: new ethers.Contract(Contract.activitiesAddress,
                                                     Contract.activitiesABI,
                                                     signer) as IATIActivities,
            activity: new ethers.Contract(Contract.activityAddress,
                                                     Contract.activityABI,
                                                     signer) as IATIActivity,
            activityAdditional: new ethers.Contract(Contract.activityAdditionalAddress,
                                                     Contract.activityAdditionalABI,
                                                     signer) as IATIActivityAdditional,
            activityDates: new ethers.Contract(Contract.activityDatesAddress,
                                                     Contract.activityDatesABI,
                                                     signer) as IATIActivityDates,
            activityParticipatingOrgs: new ethers.Contract(Contract.activityParticipatingOrgsAddress,
                                                     Contract.activityParticipatingOrgsABI,
                                                     signer) as IATIActivityParticipatingOrgs,
            activitySectors: new ethers.Contract(Contract.activitySectorsAddress,
                                                     Contract.activitySectorsABI,
                                                     signer) as IATIActivitySectors,
            activityBudgets: new ethers.Contract(Contract.activityBudgetsAddress,
                                                     Contract.activityBudgetsABI,
                                                     signer) as IATIActivityBudgets,
            activityTerritories: new ethers.Contract(Contract.activityTerritoriesAddress,
                                                     Contract.activityTerritoriesABI,
                                                     signer) as IATIActivityTerritories,
            activityTransactions: new ethers.Contract(Contract.activityTransactionsAddress,
                                                     Contract.activityTransactionsABI,
                                                     signer) as IATIActivityTransactions,
            activityRelatedActivities: new ethers.Contract(Contract.activityRelatedActivitiesAddress,
                                                     Contract.activityRelatedActivitiesABI,
                                                     signer) as IATIActivityRelatedActivities
          }
        }
      }
      //console.log('Setting contracts ', contractData)
      const add = addContracts as Function
      store.dispatch(add(contractData))
    }
  }
}
