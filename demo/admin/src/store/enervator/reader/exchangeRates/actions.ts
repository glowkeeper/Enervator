import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { ApplicationState } from '../../../../store'

import { ActionProps } from '../../../types'
import { ExchangeRateProps,
         ExchangeRateReportProps,
         ReaderActionTypes } from '../../types'

import { read } from '../../../actions'

interface RateProps {
  currency: string
}

interface ExchangeRates {
  data: Array<ExchangeRateProps>
  successActionType: ReaderActionTypes
  failureActionType: ReaderActionTypes
}

type RateReportProps = RateProps & ExchangeRates

const getExchangeRate = (props: RateReportProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const forexContract = state.chainContracts.data.contracts.forex

    const currency = props.currency
    const data =  props.data

    let exchangeRatesData: ExchangeRateReportProps = {
      data: { data: data }
    }

    let actionType = props.failureActionType

    try {
      const exchangeRate = await forexContract.getRate(currency)
      const bigExchangeRate = new BigNumber(exchangeRate)
      const thisTwo = new BigNumber(2)
      const thisSixtyFour = new BigNumber(64)
      const thisMultiplier = thisTwo.pow(thisSixtyFour)
      const thisExchangeRate = bigExchangeRate.div(thisMultiplier).toNumber()

      //console.log( thisExchangeRate )

      exchangeRatesData.data.data[data.length] = {
        currency: ethers.utils.parseBytes32String(currency),
        rate: thisExchangeRate
      }

      actionType = props.successActionType
    } catch (error) {
      console.log('getExchangeRate error', error)
    }

    dispatch(read({data: exchangeRatesData})(actionType))
  }
}

export const getExchangeRateRecord = (props: RateProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>) => {

    let rateRecords: RateReportProps = {
      currency: props.currency,
      data: [],
      successActionType: ReaderActionTypes.RATE_SUCCESS,
      failureActionType: ReaderActionTypes.RATE_FAILURE
    }

    dispatch(getExchangeRate(rateRecords))
  }
}

export const getExchangeRates = () => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>, getState: Function) => {

    const state = getState()
    const forexContract = state.chainContracts.data.contracts.forex

    let rateRecords: RateReportProps = {
      currency: "",
      data: [],
      successActionType: ReaderActionTypes.RATE_SUCCESS,
      failureActionType: ReaderActionTypes.RATE_FAILURE
    }

    try {
      const num = await forexContract.getNumCodes()
      const numCodes = num.toNumber()
      for (let i = 0; i < numCodes; i++)
      {
        rateRecords.currency = await forexContract.getCode(i.toString())
        dispatch(getExchangeRate(rateRecords))
      }
    } catch (error) {
      console.log('getExchangeRates error', error)
    }
  }
}
