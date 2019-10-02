import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../../actions'
import { ActionProps, PayloadProps } from '../../../types'

import { RefActionTypes, BuyRefProps } from '../types'


export const getBuyRefs = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const buyContract = state.chainContracts.data.contracts.buy
    const account = state.chainAccount.data.account

    let refsData: Array<string> = []

    let actionType = RefActionTypes.BUY_SUCCESS

    try {

      let ref = ""
      const num = await buyContract.getNumBuys( account )
      const numBuys = num.toNumber()
      for (let i = 0; i < numBuys; i++)
      {
        ref = await buyContract.getBuyReference( account, i.toString() )
        refsData.push(ref)
      }

    } catch (error) {

      actionType = RefActionTypes.BUY_FAILURE
      console.log('getBuyRefs error', error)

    }

    //console.log('KeysData: ', refsData, actionType)
    dispatch(write({data: refsData})(actionType))
  }
}
