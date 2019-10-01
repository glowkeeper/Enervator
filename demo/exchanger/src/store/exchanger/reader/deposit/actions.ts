import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'

import { ApplicationState } from '../../../store'

import { ActionProps } from '../../../types'
import { DepositProps } from '../../types'

import { write } from '../../../actions'

interface RecordProps {
  depositsRef: string
}

interface DepositsDataProps {
  data: Array<DepositsData>
  successActionType: ReportActionTypes
  failureActionType: ReportActionTypes
}

type DepositsProps = RecordProps & DepositsDataProps

const getThisDepositsRecord = (props: DepositsProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositsContract = state.chainContracts.data.contracts.deposits
    const depositsRef = props.depositsRef
    const data =  props.data

    let depositsData: DepositsReportProps = {
      data: { data: data }
    }

    let actionType =  props.successActionType
    try {

      const deposits: DepositsProps = await depositsContract.getDeposits(props.depositsRef)
      depositsData.data.data[data.length] = {
        depositsRef: props.depositsRef,
        version: ethers.utils.parseBytes32String(deposits.version),
        generatedTime:  ethers.utils.parseBytes32String(deposits.generatedTime),
        linkedData: ethers.utils.parseBytes32String(deposits.linkedData),
      }
    } catch (error) {
      actionType = props.failureActionType
      console.log('getDeposits error', error)
    }

    //console.log('Getting deposits: ', depositsData)

    dispatch(write({data: depositsData})(actionType))
  }
}

export const getDepositsRecord = (props: RecordProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    let indexRecordProps: DepositsProps = {
      depositsRef: props.depositsRef,
      data: [],
      successActionType: ReportActionTypes.ACTIVITIES_SUCCESS,
      failureActionType: ReportActionTypes.ACTIVITIES_FAILURE
    }

    dispatch(getThisDepositsRecord(indexRecordProps))
  }
}

export const getDeposits = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositsContract = state.chainContracts.data.contracts.deposits

    let indexRecordProps: DepositsProps = {
      depositsRef: "",
      data: [],
      successActionType: ReportActionTypes.ACTIVITIES_SUCCESS,
      failureActionType: ReportActionTypes.ACTIVITIES_FAILURE
    }

    try {
      const num = await depositsContract.getNumDeposits()
      const numDeposits = num.toNumber()
      for (let i = 0; i < numDeposits; i++) {
        indexRecordProps.depositsRef = await depositsContract.getReference(i.toString())
        dispatch(getThisDepositsRecord(indexRecordProps))
      }
    } catch (error) {
      console.log('getDeposits error', error)
    }
  }
}
