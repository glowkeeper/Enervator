import { ThunkDispatch } from 'redux-thunk'

import shortid from 'shortid'
import { ethers } from 'ethers'
import { Decimal } from 'decimal.js'

import { ApplicationState } from '../../../store'

import { write } from '../../../actions'

import { ActionProps, TxReport } from '../../../types'
import { DepositProps, WriterActionTypes } from '../../types'

import { Transaction } from '../../../../utils/strings'

interface DepositRefProps {
  state: any
  account: string
  currency: string
}

const getDepositRef = async ( props: DepositRefProps ) =>
{
  let depositRef = ""

  const depositContract = props.state.chainContracts.data.contracts.deposit

  try {

    let refTemp = ""
    let currencyTemp = ""
    const num = await depositContract.getNumDeposits( props.account )
    const numDeposits = num.toNumber()
    for (let i = 0; i < numDeposits; i++)
    {
      refTemp = await depositContract.getDepositReference( props.account, i.toString() )
      currencyTemp = await depositContract.getDepositedCode( refTemp )
      if ( currencyTemp == props.currency )
      {
        depositRef = refTemp
        const depositedAmount = await depositContract.getDepositedAmount( depositRef )
        console.log ( depositRef, depositedAmount )
        break
      }
    }
  } catch (error) {
    throw error
  }

  return depositRef

}

export const makeDeposit = ( details: DepositProps ) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const exchangerContract = state.chainContracts.data.contracts.exchange

    const address = state.chainAccount.data.account
    const currency = ethers.utils.formatBytes32String(details.currency)

    let actionType = WriterActionTypes.DEPOSIT_FAILURE
    let txData: TxReport = {}
    try {

      let depositRef = await getDepositRef( {state: state, account: address, currency: currency } )
      //let depositRef = ""
      if ( depositRef == "" ) {
        // new deposits
        depositRef = ethers.utils.formatBytes32String(shortid.generate())
      }

      console.log ( "this ref", depositRef)

      const amount = new Decimal(details.amount)
      const thisTwo = new Decimal(2)
      const thisSixtyFour = new Decimal(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisNewBigAmount = thisMultiplier.mul(amount)

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
      console.log('makeDeposit error', error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}
