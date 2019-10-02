import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../../actions'
import { ActionProps, PayloadProps } from '../../../types'

import { RefActionTypes, DepositRefProps } from '../types'


export const getDepositRefs = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositContract = state.chainContracts.data.contracts.deposit
    const account = state.chainAccount.data.account

    let refsData: Array<string> = []

    let actionType = RefActionTypes.DEPOSIT_SUCCESS

    try {

      let ref = ""
      const num = await depositContract.getNumDeposits( account )
      const numDeposits = num.toNumber()
      //console.log("numDeposits", numDeposits)
      for (let i = 0; i < numDeposits; i++)
      {
        ref = await depositContract.getDepositReference( account, i.toString() )
        //console.log("ref", ref)
        refsData.push(ref)
      }

    } catch (error) {

      actionType = RefActionTypes.DEPOSIT_FAILURE
      console.log('getDepositRefs error', error)

    }

    //console.log('KeysData: ', refsData, actionType)
    dispatch(write({data: refsData})(actionType))
  }
}
