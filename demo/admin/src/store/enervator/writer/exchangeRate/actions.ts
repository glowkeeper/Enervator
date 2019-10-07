import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { getDecimalToWei } from '../../actions'

import { ActionProps, TxReport } from '../../../types'
import { ExchangeRateProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setExchangeRate = (details: ExchangeRateProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangeRateContract = state.chainContracts.data.contracts.exchange
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    const currency = ethers.utils.formatBytes32String(details.currency)

    let actionType = WriterActionTypes.RATE_FAILURE
    let txData: TxReport = {}
    try {

      /* const retrievedUnitValue = await enervatorManagerContract.getUnitValue()
      const unitValue = parseFloat( retrievedUnitValue.toString() )
      const thisUnitValue = unitValue / 2**64
      const exchangeRate = details.rate * thisUnitValue
      const thisDecimalExchangeRate = getDecimalToWei( exchangeRate ) */

      const thisDecimalExchangeRate = getDecimalToWei( details.rate )

      const tx = await exchangeRateContract.setRate (currency, thisDecimalExchangeRate.toHexadecimal())
      txData = {
        [tx.hash]: {
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
