import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { getDecimalToTwotoSixyFour } from '../../actions'

import { ActionProps, TxReport } from '../../../types'
import { PerCapitaEnergyProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setPerCapitaEnergy = (details: PerCapitaEnergyProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    const thisPerCapitaEnergy = getDecimalToTwotoSixyFour( details.perCapitaEnergy )

    let actionType = WriterActionTypes.CAPITA_FAILURE
    let txData: TxReport = {}
    try {

      //console.log(details.perCapitaEnergy, perCapitaEnergy, thisNewBigPerCapitaEnergy.toHexadecimal())
      const tx = await enervatorManagerContract.setPerCapitaEnergy ( thisPerCapitaEnergy.toHexadecimal() )
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
      console.log('setPerCapita error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
