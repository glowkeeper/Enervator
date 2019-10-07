import { ThunkDispatch } from 'redux-thunk'

import shortid from 'shortid'
import { ethers } from 'ethers'

import { getDecimalToWei } from '../../actions'

import { Decimal } from 'decimal.js'
import { BigNumber } from 'bignumber.js'
const BN = require('bn.js')

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

    let buyRef = details.buyRef
    //let buyRef = ""
    if ( buyRef == "" ) {
      // new buys
      buyRef = ethers.utils.formatBytes32String(shortid.generate())
    }

    let actionType = WriterActionTypes.BUY_FAILURE
    let txData: TxReport = {}
    try {

      const retrievedUnitValue = await enervatorManagerContract.getUnitValue()
      const unitValue = parseFloat( retrievedUnitValue.toString() )
      const thisUnitValue = unitValue / 2**64
      const exchangeRate = details.rate * thisUnitValue
      const amountEOR = details.amount / exchangeRate
      const amountWEI = getDecimalToWei( amountEOR )

      console.log ( thisUnitValue, exchangeRate, amountEOR, amountWEI.toHexadecimal() )

      const buyData = {
        amountWEI: amountWEI.toHexadecimal(),
        buyer: address,
        buyRef: buyRef,
        depositRef: details.depositRef
      }

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
