import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'

import { ApplicationState } from '../../../store'

import { ActionProps } from '../../../types'
import { UnitValueProps, ReaderActionTypes } from '../../types'

import { write } from '../../../actions'

export const getUnitValue = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    let actionType = ReaderActionTypes.UNITVALUE_FAILURE

    let data: UnitValueProps = {
      unitValue: 0
    }

    try {

      const retrievedUnitValue = await enervatorManagerContract.getUnitValue()
      const unitValue = parseFloat( retrievedUnitValue.toString() )
      data.unitValue = unitValue / 2**64

      actionType = ReaderActionTypes.UNITVALUE_SUCCESS

    } catch (error) {

      console.log('getUnitValue error', error)

    }

    dispatch(write({data: data})(actionType))
  }
}
