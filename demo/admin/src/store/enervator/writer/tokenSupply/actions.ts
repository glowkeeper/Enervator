import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { SupplyProps, WriterActionTypes} from '../../types'

import { Transaction } from '../../../../utils/strings'

export const setSupply = (details: SupplyProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    let actionType = WriterActionTypes.SUPPLY_FAILURE
    let txData: TxReport = {}
    try {
      // set(bytes32 _reference, bytes32 _orgRef, bytes32 _reportingOrgRef, bytes32 _version, bytes32 _generatedTime)
      const totalSupply = await enervatorManagerContract.getTotalSupply()
      const bigSupply = ethers.utils.bigNumberify(totalSupply)
      const currentSupply = bigSupply.div(ethers.constants.WeiPerEther).toNumber()
      let key = -1

      if ( currentSupply != details.supply )
      {
        if ( currentSupply > details.supply )
        {
          const amount = currentSupply - details.supply
          const burnAmount =  ethers.utils.bigNumberify(amount)
          const decimilisedBurnAmount = ethers.constants.WeiPerEther.mul( burnAmount )

          //console.log(currentSupply, details.supply, amount, decimilisedBurnAmount )

          const tx = await enervatorManagerContract.burnTokens (decimilisedBurnAmount)
          txData = {
            [tx.hash]: {
              summary: `${Transaction.success}`,
              info: tx
            }
          }
        } else
        {
          const amount = details.supply - currentSupply
          const addAmount =  ethers.utils.bigNumberify(amount)
          const decimilisedAddAmount = ethers.constants.WeiPerEther.mul( addAmount )

          //console.log(currentSupply, details.supply, amount, decimilisedAddAmount )

          const tx = await enervatorManagerContract.addTokens (decimilisedAddAmount)
          txData = {
            [tx.hash]: {
              summary: `${Transaction.success}`,
              info: tx
            }
          }
        }
        actionType = WriterActionTypes.SUPPLY_SUCCESS
      }
    } catch (error) {
      txData = {
        [-1]: {
          summary: `${Transaction.fail}`,
          info: {}
        }
      }
      console.log('setSupply error', error)
    }
    dispatch(write({data: {data: txData}})(actionType))
  }
}
