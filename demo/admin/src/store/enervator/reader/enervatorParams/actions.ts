import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

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

    let actionType = ReaderActionTypes.REPORT_FAILURE
    try {

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

      const thisTwo = new BigNumber(2)
      const thisSixtyFour = new BigNumber(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)

      enervatorParamsData.tokenName = await enervatorManagerContract.getTokenName()
      enervatorParamsData.tokenSymbol = await enervatorManagerContract.getTokenSymbol()

      const totalSupply = await enervatorManagerContract.getTotalSupply()
      const bigSupply = ethers.utils.bigNumberify(totalSupply)
      enervatorParamsData.totalSupply = bigSupply.div(ethers.constants.WeiPerEther).toNumber()

      const pricePerMWh = await enervatorManagerContract.getPricePerMWh()
      const bigPricePerMWh = new BigNumber(pricePerMWh)
      enervatorParamsData.pricePerMWh = bigPricePerMWh.div(thisMultiplier).toNumber()

      const currentTPES = await enervatorManagerContract.getCurrentTPES()
      const bigCurrentTPES =new BigNumber(currentTPES)
      enervatorParamsData.currentTPES = bigCurrentTPES.div(thisMultiplier).toNumber()

      const oldTPES = await enervatorManagerContract.getOldTPES()
      const bigOldTPES = new BigNumber(oldTPES)
      enervatorParamsData.oldTPES = bigOldTPES.div(thisMultiplier).toNumber()

      const perCapitaEnergy = await enervatorManagerContract.getPerCapitaEnergy()
      const bigPerCapitaEnergy = new BigNumber(perCapitaEnergy)
      enervatorParamsData.perCapitaEnergy = bigPerCapitaEnergy.div(thisMultiplier).toNumber()

      const unitValue = await enervatorManagerContract.getUnitValue()
      const bigUnitValue = new BigNumber(unitValue)
      enervatorParamsData.unitValue = bigUnitValue.div(thisMultiplier).toNumber()

      enervatorData.data.data[0] = enervatorParamsData

      //console.log( enervatorParamsData.tokenName, enervatorParamsData.tokenSymbol,enervatorData.data.data[0] )

      actionType = ReaderActionTypes.REPORT_SUCCESS
    } catch (error) {
      console.log('getEnervatorReport error', error)
    }

    dispatch(read({data: enervatorData})(actionType))
  }
}
