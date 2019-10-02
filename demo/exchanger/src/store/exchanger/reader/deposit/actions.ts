import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { ApplicationState } from '../../../store'
import { ActionProps } from '../../../types'

import { ReaderActionTypes, DepositReportProps, BlockchainDepositProps, DepositProps } from '../../types'

import { write } from '../../../actions'

interface RecordProps {
  depositsRef: string
}

interface DepositsDataProps {
  data: Array<DepositProps>
  successActionType: ReaderActionTypes
  failureActionType: ReaderActionTypes
}

type DepositsProps = RecordProps & DepositsDataProps

const getThisDepositsRecord = (props: DepositsProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositsContract = state.chainContracts.data.contracts.deposit
    const depositsRef = props.depositsRef
    const data =  props.data

    let depositsData: DepositReportProps = {
      data: { data: data }
    }

    let actionType =  props.successActionType
    try {

      // bytes32 code, int128 amount, address account, bool canWithdraw

      const deposits: BlockchainDepositProps = await depositsContract.getDeposit ( props.depositsRef )

      const bigAmount = new BigNumber(deposits.amount)
      const thisTwo = new BigNumber(2)
      const thisSixtyFour = new BigNumber(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisAmount = bigAmount.div(thisMultiplier).toNumber()

      depositsData.data.data[data.length] = {
          depositRef: props.depositsRef,
          currency: ethers.utils.parseBytes32String(deposits.code),
          amount: thisAmount,
          address: deposits.account
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
      successActionType: ReaderActionTypes.DEPOSIT_SUCCESS,
      failureActionType: ReaderActionTypes.DEPOSIT_FAILURE
    }

    dispatch(getThisDepositsRecord(indexRecordProps))
  }
}

export const getDeposits = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositsContract = state.chainContracts.data.contracts.deposit

    let indexRecordProps: DepositsProps = {
      depositsRef: "",
      data: [],
      successActionType: ReaderActionTypes.DEPOSIT_SUCCESS,
      failureActionType: ReaderActionTypes.DEPOSIT_FAILURE
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
