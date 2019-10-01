import { ThunkDispatch } from 'redux-thunk'

import shortid from 'shortid'
import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { DepositProps, WriterActionTypes } from '../../types'

import { Transaction } from '../../../../utils/strings'

export const makeDeposit = (details: DepositProps ) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangerContract = state.chainContracts.data.contracts.exchange

    let depositRef = details.depositRef
    if ( depositRef == "" ) {
      depositRef = ethers.utils.formatBytes32String(shortid.generate())
    }
    const currency = ethers.utils.formatBytes32String(details.currency)
    const address = state.chainAccount.data.account

    const amount = new Decimal(details.amount)
    const thisTwo = new Decimal(2)
    const thisSixtyFour = new Decimal(64)
    const thisMultiplier = thisTwo.pow(thisSixtyFour)
    const thisNewBigAmount = thisMultiplier.mul(amount)

    let actionType = WriterActionTypes.DEPOSIT_FAILURE
    let txData: TxReport = {}
    try {
      // deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, int128 _amount )@
      const tx = await exchangerContract.deposit(
        address,
        depositRef,
        currency,
        thisNewBigAmount.toHexadecimal()
      )
      txData = {
        [tx.hash]: {
          summary: `${Transaction.success}`,
          info: tx
        }
      }

      actionType = WriterActionTypes.DEPOSIT_SUCCESS
    } catch (error) {
      txData = {
        [-1]: {
          summary: `${Transaction.fail}`,
          info: {}
        }
      }
      console.log('set activities error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
