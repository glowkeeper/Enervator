import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../../actions'
import { ActionProps, PayloadProps } from '../../../types'

import { RefActionTypes, DepositRefProps, DepositRefData } from '../types'


export const getDepositRefs = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const depositContract = state.chainContracts.data.contracts.deposit
    const account = state.chainAccount.data.account

    let refsData: DepositRefData =
    {
      refs: []
    }

    let actionType = RefActionTypes.DEPOSIT_SUCCESS

    try {

      let ref = ""
      const num = await depositContract.getNumDeposits( account )
      const numDeposits = num.toNumber()
      for (let i = 0; i < numDeposits; i++)
      {
        ref = await depositContract.getDepositReference( account, i.toString() )
        refsData.refs.push(ref)
      }

    } catch (error) {

      actionType = RefActionTypes.DEPOSIT_FAILURE
      console.log('getDepositRefs error', error)

    }

    //console.log('KeysData: ', refsData, actionType)
    dispatch(write({data: refsData})(actionType))
  }
}
