import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { PerCapitaEnergyProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setPerCapitaEnergy = (details: PerCapitaEnergyProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    let actionType = WriterActionTypes.CAPITA_FAILURE
    let txData: TxReport = {}
    try {

      const perCapitaEnergy = new Decimal(details.perCapitaEnergy)
      const thisTwo = new Decimal(2)
      const thisSixtyFour = new Decimal(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisNewBigPerCapitaEnergy = thisMultiplier.mul(perCapitaEnergy)

      console.log(details.perCapitaEnergy, perCapitaEnergy, thisNewBigPerCapitaEnergy.toHexadecimal())
      const tx = await enervatorManagerContract.setPerCapitaEnergy (thisNewBigPerCapitaEnergy.toHexadecimal())
      txData = {
        [tx.hash]: {
          summary: `${Transaction.success}`,
          info: tx
        }
      }
      actionType = WriterActionTypes.CAPITA_SUCCESS
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
