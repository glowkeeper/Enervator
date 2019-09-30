import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

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

      const tpes = new Decimal(details.tPES)
      const thisTwo = new Decimal(2)
      const thisSixtyFour = new Decimal(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisNewBigTPES = thisMultiplier.mul(tpes)

      // set(bytes32 _reference, bytes32 _orgRef, bytes32 _reportingOrgRef, bytes32 _version, bytes32 _generatedTime)
      console.log(details.tPES, tpes, thisNewBigTPES.toHexadecimal())
      const tx = await enervatorManagerContract.setTPES (thisNewBigTPES.toHexadecimal())
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
