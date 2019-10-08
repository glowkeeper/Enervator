import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { getBigNumberFromWei, getBigNumberFromTwotoSixyFour, getDecimalToWei } from '../../actions'

import { ApplicationState } from '../../../../store'

import { ActionProps } from '../../../types'
import { EnervatorProps,
         EnervatorReportProps,
         ReaderActionTypes } from '../../types'

import { read } from '../../../actions'

export const getEnervatorReport = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const enervatorManagerContract = state.chainContracts.data.contracts.enervatorManager

    let enervatorData: EnervatorReportProps = {
      data: { data: [] }
    }

    let enervatorParamsData: EnervatorProps = {
      tokenName: "",
      tokenSymbol: "",
      totalSupply: 0,
      pricePerMWh: 0,
      currentTPES: 0,
      oldTPES: 0,
      perCapitaEnergy: 0,
      unitValue: 0
    }

    let actionType = ReaderActionTypes.REPORT_FAILURE
    try {

      enervatorParamsData.tokenName = await enervatorManagerContract.getTokenName()
      enervatorParamsData.tokenSymbol = await enervatorManagerContract.getTokenSymbol()

      const totalSupply = await enervatorManagerContract.getTotalSupply()
      const bigSupply = new BigNumber( totalSupply )
      enervatorParamsData.totalSupply = getBigNumberFromWei( bigSupply )

      const retrievedPricePerMWh = await enervatorManagerContract.getPricePerMWh()
      const bigPricePerMWh = new BigNumber(retrievedPricePerMWh)
      const pricePerMWh = getBigNumberFromTwotoSixyFour( bigPricePerMWh )
      enervatorParamsData.pricePerMWh = Math.round( ( pricePerMWh ) * 100 + Number.EPSILON ) / 100

      const currentTPES = await enervatorManagerContract.getCurrentTPES()
      const bigCurrentTPES =new BigNumber(currentTPES)
      enervatorParamsData.currentTPES = getBigNumberFromTwotoSixyFour( bigCurrentTPES )

      const oldTPES = await enervatorManagerContract.getOldTPES()
      const bigOldTPES = new BigNumber(oldTPES)
      enervatorParamsData.oldTPES = getBigNumberFromTwotoSixyFour( bigOldTPES )

      const retrievedPerCapitaEnergy = await enervatorManagerContract.getPerCapitaEnergy()
      const bigPerCapitaEnergy = new BigNumber( retrievedPerCapitaEnergy )
      const perCapitaEnergy = getBigNumberFromTwotoSixyFour( bigPerCapitaEnergy )
      enervatorParamsData.perCapitaEnergy = Math.round( ( perCapitaEnergy ) * 100 + Number.EPSILON ) / 100

      const retrievedUnitValue = await enervatorManagerContract.getUnitValue()
      const bigRetrievedUnitValue = new BigNumber( retrievedUnitValue )
      const unitValue = getBigNumberFromTwotoSixyFour( bigRetrievedUnitValue )
      enervatorParamsData.unitValue = Math.round( ( unitValue ) * 100 + Number.EPSILON ) / 100

      enervatorData.data.data[0] = enervatorParamsData

      //console.log( enervatorParamsData.tokenName, enervatorParamsData.tokenSymbol,enervatorData.data.data[0] )

      actionType = ReaderActionTypes.REPORT_SUCCESS
    } catch (error) {
      console.log('getEnervatorReport error', error)
    }

    dispatch(read({data: enervatorData})(actionType))
  }
}
