import { PayloadProps } from '../types'

/* IATI Budgets */

interface FinanceProps {
  status: number
  value: number
  start: string
  end: string
}

export interface IATIBudgetProps {
  budgetType: number
  budgetLine: string
  otherRef: string
  finance: FinanceProps
}

/* IATI Organisation Reader */

export interface OrganisationReportProps {
  organisationsRef: string
}

export interface OrganisationsReportProps {
 organisationsRef: string
 organisationRef: string
}

export interface IATIOrganisationsData {
  organisationsRef: string
  version: string
  generatedTime: string
}

export interface IATIOrganisationsReport {
  data: Array<IATIOrganisationsData>
}

export interface IATIOrganisationsReportProps extends PayloadProps {
  data: IATIOrganisationsReport
}

export interface IATIOrganisationData {
  organisationRef: string
  issuingOrgRef: string
  reportingOrgRef: string
  reportingOrgType: number
  reportingOrgIsSecondary: boolean
  lang: string
  currency: string
  lastUpdatedTime: string
}

export interface IATIOrganisationReport {
  organisationsRef: string
  data: Array<IATIOrganisationData>
}

export interface IATIOrganisationReportProps extends PayloadProps {
  data: IATIOrganisationReport
}

export interface IATIOrgData {
  orgRef: string
  name: string
  identifier: string
}

export interface IATIOrgReport {
  data: Array<IATIOrgData>
}

export interface IATIOrgReportProps extends PayloadProps {
  data: IATIOrgReport
}

export interface IATIOrganisationDocData {
  title: string
  format: string
  url: string
  category: string
  countryRef: string
  description: string
  language: string
  date: string
}

export interface IATIOrganisationDocReport {
  organisationsRef: string
  organisationRef: string
  data: Array<IATIOrganisationDocData>
}

export interface IATIOrganisationDocReportProps extends PayloadProps {
  data: IATIOrganisationDocReport
}

/* IATI Budget Reader */

export interface IATIOrganisationBudgetData  {
  budgetKey: string
  budgetLine: string
  status: number
  value: number
  start: string
  end: string
}

export interface IATIExpenditureData {
  expenditureKey: string
  expenditureLine: string
  status: number
  value: number
  start: string
  end: string
}

export interface IATIRecipientOrgBudgetData {
  budgetKey: string
  budgetLine: string
  recipientOrgRef: string
  status: number
  value: number
  start: string
  end: string
}

export interface IATIRegionBudgetData {
  budgetKey: string
  budgetLine: string
  regionRef: string
  status: number
  value: number
  start: string
  end: string
}

export interface IATICountryBudgetData {
  budgetKey: string
  budgetLine: string
  countryRef: string
  status: number
  value: number
  start: string
  end: string
}

export interface IATIActivityBudgetData {
  budgetRef: string
  budgetType: number
  status: number
  value: number
  start: string
  end: string
}

type ActivityBudgetData = IATIActivityBudgetData

export interface IATIOrganisationBudgetReport {
  organisationsRef: string
  organisationRef: string
  data: Array<IATIOrganisationBudgetData | IATIExpenditureData | IATIRecipientOrgBudgetData | IATIRegionBudgetData | IATICountryBudgetData>
}

export interface IATIActivityBudgetReport {
  activitiesRef: string
  activityRef: string
  data: Array<ActivityBudgetData>
}

export interface IATIActivityBudgetReportProps extends PayloadProps {
  data: IATIActivityBudgetReport
}

export interface IATIOrganisationBudgetReportProps extends PayloadProps {
  data: IATIOrganisationBudgetReport
}

/* IATI Organisation Writer */

export interface IATIOrgProps {
  name: string
  identifier: string
}

export interface OrgProps {
  orgRef: string
  name: string
  code: string
  identifier: string
}

export interface IATIOrganisationsProps {
  version: string
  generatedTime: string
}

export interface OrganisationsProps {
  organisationsRef: string
  version: string
}

export interface ReportingOrgProps {
  orgType: number
  isSecondary: boolean
  orgRef: string
}

export interface IATIOrganisationProps {
  orgRef: string
  reportingOrg: ReportingOrgProps
  lang: string
  currency: string
  lastUpdatedTime: string
}

export interface OrganisationProps {
  organisationsRef: string
  organisationRef: string
  orgRef: string
  reportingOrgRef: string
  reportingOrgType: number
  reportingOrgIsSecondary: boolean
  lang: string
  currency: string
}

export interface IATIOrganisationDocProps {
  title: string
  format: string
  url: string
  category: string
  countryRef: string
  desc: string
  lang: string
  date: string
}

export interface OrganisationDocProps {
  organisationsRef: string
  organisationRef: string
  docRef: string
  title: string
  format: string
  url: string
  category: string
  countryRef: string
  desc: string
  lang: string
  day: number
  month: number
  year: number
}

/* IATI Budgets Writer */

export interface OrganisationBudgetProps {
  organisationsRef: string
  organisationRef: string
  budgetRef: string
  budgetLine: string
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

export interface OrganisationExpenditureProps {
  organisationsRef: string
  organisationRef: string
  expenditureRef: string
  expenditureLine: string
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

export interface OrganisationRecipientBudgetProps {
  organisationsRef: string
  organisationRef: string
  budgetRef: string
  recipientOrgRef: string
  budgetLine: string
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

export interface OrganisationRegionBudgetProps {
  organisationsRef: string
  organisationRef: string
  budgetRef: string
  regionRef: string
  budgetLine: string
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

export interface OrganisationCountryBudgetProps {
  organisationsRef: string
  organisationRef: string
  budgetRef: string
  countryRef: string
  budgetLine: string
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

export interface ActivityBudgetProps {
  activitiesRef: string
  activityRef: string
  budgetRef: string
  budgetType: number
  status: number
  value: number
  startDay: number
  startMonth: number
  startYear: number
  endDay: number
  endMonth: number
  endYear: number
}

/* IATI Activities Writer */

export interface IATIActivitiesProps {
  version: string
  generatedTime: string
  linkedData: string
}

export interface ActivitiesProps {
  activitiesRef: string
  version: string
  linkedData: string
}

export interface IATIActivityProps {
  humanitarian: boolean
  hierarchy: number
  status: number
  budgetNotProvided: number
  reportingOrg: ReportingOrgProps
  lastUpdated: string
  lang: string
  currency: string
  linkedData: string
  identifier: string
  title: string
  description: string
}

export interface ActivityProps {
  activitiesRef: string
  activityRef: string
  identifier: string
  reportingOrgRef: string
  reportingOrgType: number
  reportingOrgIsSecondary: boolean
  title: string
  lang: string
  currency: string
  humanitarian: boolean
  budgetNotProvided: number
  status: number
  hierarchy: number
  linkedData: string
  description: string
}

export interface IATIActivityAdditionalProps {
  defaultAidType: string
  defaultFinanceType: number
  scope: number
  capitalSpend: number
  collaborationType: number
  defaultFlowType: number
  defaultTiedStatus: number
}

export interface ActivityAdditionalProps {
  activitiesRef: string
  activityRef: string
  additionalRef: string
  defaultAidType: string
  defaultFinanceType: number
  scope: number
  capitalSpend: number
  collaborationType: number
  defaultFlowType: number
  defaultTiedStatus: number
}

export interface IATIActivityDateProps {
  dateType: number
  date: string
  narrative: string
}

export interface ActivityDateProps {
  activitiesRef: string
  activityRef: string
  dateRef: string
  dateType: number
  day: number
  month: number
  year: number
  narrative: string
}

export interface IATIActivityParticipatingOrgProps {
  orgType: number
  role: number
  crsChannelCode: number
  lang: string
  orgRef: string
  narrative: string
}

export interface ActivityParticipatingOrgProps {
  activitiesRef: string
  activityRef: string
  participatingOrgRef: string
  orgRef: string
  orgType: number
  role: number
  crsChannelCode: number
  narrative: string
  lang: string
}

export interface IATIActivitySectorProps {
  percentage: number
  dacCode: number
}

export interface ActivitySectorProps {
  activitiesRef: string
  activityRef: string
  sectorRef: string
  percentage: number
  dacCode: number
}

export interface IATIActivityTerritoryProps {
  territory: string
  percentage: number
}

export interface ActivityTerritoryProps {
  activitiesRef: string
  activityRef: string
  territoryRef: string
  countryCode: string
  regionCode: string
  percentage: number
}

interface ActivityTransactionValue {
  value: number
  date: string
  currency: string
}

interface ActivityTransactionProviderOrg {
  orgType: number
  orgRef: string
  activityRef: string
}

interface ActivityTransactionReceiverOrg {
  orgType: number
  orgRef: string
  activityRef: string
}

export interface IATIActivityTransactionProps {
  transactionType: number
  disbursementChannel: number
  flowType: number
  tiedStatus: number
  financeType: number
  aidType: string
  date: string
  value: ActivityTransactionValue
  providerOrg: ActivityTransactionProviderOrg
  receiverOrg: ActivityTransactionReceiverOrg
  sectorDacCode: number
  territory: string
  description: string
}

export interface ActivityTransactionProps {
  activitiesRef: string
  activityRef: string
  transactionRef: string
  transactionType: number
  disbursementChannel: number
  flowType: number
  tiedStatus: number
  financeType: number
  aidType: string
  day: number
  month: number
  year: number
  value: number
  valueDay: number
  valueMonth: number
  valueYear: number
  currency: string
  providerOrgType: number
  providerOrgRef: string
  providerActivityRef: string
  receiverOrgType: number
  receiverOrgRef: string
  receiverActivityRef: string
  sectorDacCode: number
  countryCode: string
  regionCode: string
  description: string
}

export interface IATIActivityRelatedActivityProps {
  relationType: number
  activityRef: string
}

export interface ActivityRelatedActivityProps {
  activitiesRef: string
  activityRef: string
  activityRelatedActivityRef: string
  relationType: number
  relatedActivityRef: string
}

/* IATI Activities Reader */

export interface ActivityReportProps {
  activitiesRef: string
}

export interface ActivitiesReportProps {
 activitiesRef: string
 activityRef: string
}

export interface IATIActivitiesData {
  activitiesRef: string
  version: string
  generatedTime: string
  linkedData: string
}

export interface IATIActivitiesReport {
  data: Array<IATIActivitiesData>
}

export interface IATIActivitiesReportProps extends PayloadProps {
  data: IATIActivitiesReport
}

export interface IATIActivityData {
  activityRef: string
  title: string
  description: string
  identifier: string
  linkedData: string
  lang: string
  currency: string
  lastUpdated: string
  reportingOrgRef: string
  reportingOrgType: number
  reportingOrgIsSecondary: boolean
  status: number
  humanitarian: boolean
  hierarchy: number
  budgetNotProvided: number
}

export interface IATIActivityReport {
  activitiesRef: string
  data: Array<IATIActivityData>
}

export interface IATIActivityReportProps extends PayloadProps {
  data: IATIActivityReport
}

export interface IATIActivityAdditionalData {
  additionalRef: string
  defaultAidType: string
  defaultFinanceType: number
  scope: number
  capitalSpend: number
  collaborationType: number
  defaultFlowType: number
  defaultTiedStatus: number
}

export interface IATIActivityAdditionalReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityAdditionalData>
}

export interface IATIActivityAdditionalReportProps extends PayloadProps {
  data: IATIActivityAdditionalReport
}

export interface IATIActivityDatesData {
  dateRef: string
  dateType: number
  date: string
  narrative: string
}

export interface IATIActivityDatesReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityDatesData>
}

export interface IATIActivityDatesReportProps extends PayloadProps {
  data: IATIActivityDatesReport
}

export interface IATIActivityParticipatingOrgData {
  participatingOrgRef: string
  orgRef: string
  orgType: number
  role: number
  crsChannelCode: number
  narrative: string
  lang: string
}

export interface IATIActivityParticipatingOrgReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityParticipatingOrgData>
}

export interface IATIActivityParticipatingOrgReportProps extends PayloadProps {
  data: IATIActivityParticipatingOrgReport
}

export interface IATIActivitySectorData {
  sectorRef: string
  percentage: number
  dacCode: number
}

export interface IATIActivitySectorReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivitySectorData>
}

export interface IATIActivitySectorReportProps extends PayloadProps {
  data: IATIActivitySectorReport
}

export interface IATIActivityTerritoryData {
  territoryRef: string
  territory: string
  percentage: number
}

export interface IATIActivityTerritoryReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityTerritoryData>
}

export interface IATIActivityTerritoryReportProps extends PayloadProps {
  data: IATIActivityTerritoryReport
}

export interface IATIActivityTransactionData {
  transactionRef: string
  transactionType: number
  disbursementChannel: number
  flowType: number
  tiedStatus: number
  financeType: number
  aidType: string
  date: string
  value: number
  valueDate: string
  currency: string
  providerOrgType: number
  providerOrgRef: string
  providerActivityRef: string
  receiverOrgType: number
  receiverOrgRef: string
  receiverActivityRef: string
  sectorDacCode: number
  territory: string
  description: string
}

export interface IATIActivityTransactionReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityTransactionData>
}

export interface IATIActivityTransactionReportProps extends PayloadProps {
  data: IATIActivityTransactionReport
}

export interface IATIActivityRelatedActivityData {
  activityRelatedActivityRef: string
  relationType: number
  relatedActivityRef: string
}

export interface IATIActivityRelatedActivityReport {
  activitiesRef: string
  activityRef: string
  data: Array<IATIActivityRelatedActivityData>
}

export interface IATIActivityRelatedActivityReportProps extends PayloadProps {
  data: IATIActivityRelatedActivityReport
}

/* Action Types */

export const enum WriterActionTypes {
  TX_INIT =  '@@WriterActionTypes/TX_INIT',
  RATE_SUCCESS = '@@WriterActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@WriterActionTypes/RATE_FAILURE'
}

export const enum ReaderActionTypes {
  REPORT_INIT = '@@ReaderActionTypes/REPORT_INIT',
  RATE_SUCCESS = '@@ReaderActionTypes/RATE_SUCCESS',
  RATE_FAILURE = '@@ReaderActionTypes/RATE_FAILURE'
}
