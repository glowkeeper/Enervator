import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../../../store'

import { write } from '../../../actions'
import { ActionProps, PayloadProps } from '../../../types'

import { RefActionTypes, BuyRefProps, BuyRefData } from '../types'

interface BuyProps {
  account: string
}

export const getBuyRefs = ( props: BuyProps ) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const buyContract = state.chainContracts.data.contracts.buy

    let refsData: BuyRefData =
    {
      refs: []
    }

    let actionType = RefActionTypes.BUY_SUCCESS

    try {

      let ref = ""
      const num = await buyContract.getNumBuys( props.account )
      const numBuys = num.toNumber()
      for (let i = 0; i < numBuys; i++)
      {
        ref = await buyContract.getBuyReference( props.account, i.toString() )
        refsData.refs.push(ref)
      }

    } catch (error) {

      actionType = RefActionTypes.BUY_FAILURE
      console.log('getBuyRefs error', error)

    }

    //console.log('KeysData: ', refsData, actionType)
    dispatch(write({data: refsData})(actionType))
  }
}
