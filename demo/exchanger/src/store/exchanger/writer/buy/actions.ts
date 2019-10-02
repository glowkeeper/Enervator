import { ThunkDispatch } from 'redux-thunk'

import shortid from 'shortid'
import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { BuyProps, WriterActionTypes } from '../../types'

import { Transaction } from '../../../../utils/strings'


export const makeBuy = ( details: BuyProps ) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangerContract = state.chainContracts.data.contracts.exchange

    const address = state.chainAccount.data.account

    let actionType = WriterActionTypes.BUY_FAILURE
    let txData: TxReport = {}
    try {

      let buyRef = details.buyRef
      //let buyRef = ""
      if ( buyRef == "" ) {
        // new buys
        buyRef = ethers.utils.formatBytes32String(shortid.generate())
      }

      //console.log ( "this ref", buyRef)

      const amount = new Decimal(details.amount)
      const thisTwo = new Decimal(2)
      const thisSixtyFour = new Decimal(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisNewBigAmount = thisMultiplier.mul(amount)

      //console.log( "Buy this", address, buyRef, details.depositRef, thisNewBigAmount.toHexadecimal() )

      //   "function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef, int128 _amountFIAT )@500000",
      const tx = await exchangerContract.buy(
        address,
        buyRef,
        details.depositRef,
        thisNewBigAmount.toHexadecimal()
      )
      txData = {
        [tx.hash]: {
          summary: `${Transaction.success}`,
          info: tx
        }
      }

      actionType = WriterActionTypes.BUY_SUCCESS
    } catch (error) {
      txData = {
        [-1]: {
          summary: `${Transaction.fail}`,
          info: {}
        }
      }
      console.log('makeBuy error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
