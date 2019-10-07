import { ThunkDispatch } from 'redux-thunk'

import { BigNumber } from 'bignumber.js'
import { Decimal } from 'decimal.js'
import BN from 'bn.js'

import { ApplicationState } from '../../store'

import { ethers } from 'ethers'

import { storeAction } from '../actions'

import { initialise as txInitialise } from './writer/actions'
import { initialise as readDataInitialise } from './reader/actions'

import { ActionProps, PayloadProps } from '../types'
import { ReaderActionTypes } from './types'

export const initialise = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {
    await dispatch(txInitialise())
    await dispatch(readDataInitialise())
  }
}

export const getDecimalToWei = ( value: number ): Decimal => {

  const thisValue = new Decimal( value )
  const ten = new Decimal( '10' )
  const eighteen = new Decimal( '18' )
  const mulitplier = ten.pow( eighteen )

  return mulitplier.mul( thisValue ) as Decimal

}

export const getDecimalToTwotoSixyFour = ( value: number ): Decimal => {

  const thisValue = new Decimal( value )
  const two = new Decimal( '2' )
  const sixtyFour = new Decimal( '64' )
  const mulitplier = two.pow( sixtyFour )

  return mulitplier.mul( thisValue ) as Decimal

}

export const getDecimalFromWei = ( value: Decimal ): number => {

  const ten = new Decimal( '10' )
  const eighteen = new Decimal( '18' )
  const mulitplier = ten.pow( eighteen )

  return ( value.div( mulitplier ) ).toNumber()

}

export const getBNToTwotoSixyFour = ( value: number ): BN => {

  const thisValue = new BN( value )
  const two = new BN( '2' )
  const sixtyFour = new BN( '64' )
  const mulitplier = two.pow( sixtyFour )

  return mulitplier.mul( thisValue ) as BN

}
