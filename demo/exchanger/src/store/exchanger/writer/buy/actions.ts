import { ThunkDispatch } from 'redux-thunk'

import shortid from 'shortid'
import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'
import { BigNumber } from 'bignumber.js'
//const BN = require('bn.js')

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { BuyProps, WriterActionTypes } from '../../types'

import { Transaction } from '../../../../utils/strings'


export const makeBuy = ( details: BuyProps ) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangerContract = state.chainContracts.data.contracts.exchange
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    const address = state.chainAccount.data.account
    const currency = ethers.utils.formatBytes32String(details.currency)

    const thisTwo = new BigNumber(2)
    const thisSixtyFour = new BigNumber(64)
    const thisMultiplier = thisTwo.pow(thisSixtyFour)

    const amount = new BigNumber(details.amount)
    const bigAmount = amount.shiftedBy( 64 )

    let buyRef = details.buyRef
    //let buyRef = ""
    if ( buyRef == "" ) {
      // new buys
      buyRef = ethers.utils.formatBytes32String(shortid.generate())
    }

    let actionType = WriterActionTypes.BUY_FAILURE
    let txData: TxReport = {}
    try {

      const eORDollarValue = await enervatorManagerContract.getUnitValue()
      const bigEORDollarValue = new BigNumber( eORDollarValue )

      console.log(bigEORDollarValue)

      const shiftedEORDollarValue = bigEORDollarValue.div( thisMultiplier ).toNumber()

      console.log(shiftedEORDollarValue)

      const thisRate = shiftedEORDollarValue * details.rate
      const amountEOR = details.amount * thisRate

      console.log(thisRate)

      const bigRate = new BigNumber( thisRate )
      const thisBigRate = bigRate.shiftedBy( 64 )

      console.log(thisBigRate)

      const bigAmountEOR = new BigNumber( amountEOR )
      const thisBigAmountEOR = bigAmountEOR.shiftedBy( 64 )

      console.log( thisBigAmountEOR )

      const fiatString = "0x" + bigAmount.toString(16)
      const eORString = "0x" + thisBigAmountEOR.toString(16)
      const rateString = "0x" + thisBigRate.toString(16)

      const buyData = {
        buyer: address,
        buyRef: buyRef,
        depositRef: details.depositRef,
        amountFIAT: fiatString,
        amountEOR: eORString,
        exchangeRate: rateString
      }

      console.log( "Buy this", buyData )

      const tx = await exchangerContract.buy( buyData )
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
