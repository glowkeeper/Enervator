import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { TPESProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setTPES = (details: TPESProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    let actionType = WriterActionTypes.TPES_FAILURE
    let txData: TxReport = {}
    try {

      const thisTwo = new BigNumber(2)
      const thisSixtyFour = new BigNumber(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)

      const tpes = new BigNumber(details.tPES)
      const thisNewBigTPES = thisMultiplier.times(tpes)
      const tPESString = "0x" + thisNewBigTPES.toString(16)

      //console.log(details.tPES, tpes, thisNewBigTPES.toHexadecimal())
      const tx = await enervatorManagerContract.setTPES (tPESString)
      txData = {
        [tx.hash]: {
          summary: `${Transaction.success}`,
          info: tx
        }
      }
      actionType = WriterActionTypes.TPES_SUCCESS
    } catch (error) {
      txData = {
        [-1]: {
          summary: `${Transaction.fail}`,
          info: {}
        }
      }
      console.log('setTPES error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
