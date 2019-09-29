import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { ExchangeRateProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setExchangeRate = (details: ExchangeRateProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangeRateContract = state.chainContracts.data.contracts.exchange

    const currency = ethers.utils.formatBytes32String(details.currency)
    const rate = new Decimal(details.rate)
    const thisTwo = new Decimal(2)
    const thisSixtyFour = new Decimal(64)
    const thisMultiplier = thisTwo.pow(thisSixtyFour)
    const thisNewBigRate = thisMultiplier.mul(rate)

    //console.log (currency, thisNewBigRate.toString())

    let actionType = WriterActionTypes.RATE_FAILURE
    let txData: TxReport = {}
    try {
      // set(bytes32 _reference, bytes32 _orgRef, bytes32 _reportingOrgRef, bytes32 _version, bytes32 _generatedTime)
      const tx = await exchangeRateContract.setRate (currency, thisNewBigRate.toString())
      const key = tx.hash
      txData = {
        [key]: {
          summary: `${Transaction.success}`,
          info: tx
        }
      }
      actionType = WriterActionTypes.RATE_SUCCESS
    } catch (error) {
      txData = {
        [-1]: {
          summary: `${Transaction.fail}`,
          info: {}
        }
      }
      console.log('setRate error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
