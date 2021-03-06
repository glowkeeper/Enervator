import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'

import { getBigNumberFromWei } from '../../actions'

import { ApplicationState } from '../../../store'

import { ActionProps } from '../../../types'
import { ExchangeRateProps,
         ExchangeRateReportProps,
         ReaderActionTypes } from '../../types'

import { write } from '../../../actions'

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

    const currency = ethers.utils.formatBytes32String(props.currency)
    const data =  props.data

    let exchangeRatesData: ExchangeRateReportProps = {
      data: { data: data }
    }

    let actionType = props.failureActionType

    try {

      const exchangeRate = await forexContract.getRate(currency)
      const bigExchangeRate = new BigNumber(exchangeRate)
      const thisExchangeRate = getBigNumberFromWei( bigExchangeRate )

      //console.log( thisExchangeRate )

      exchangeRatesData.data.data[data.length] = {
        currency: ethers.utils.parseBytes32String(currency),
        rate: thisExchangeRate
      }

      actionType = props.successActionType
    } catch (error) {
      console.log('getExchangeRate error', error)
    }

    dispatch(write({data: exchangeRatesData})(actionType))
  }
}

export const getExchangeRateRecord = (props: RateProps) => {
  return async (dispatch: ThunkDispatch<ApplicationState, null, ActionProps>) => {

    let rateRecords: RateReportProps = {
      currency: props.currency,
      data: [],
      successActionType: ReaderActionTypes.FOREX_SUCCESS,
      failureActionType: ReaderActionTypes.FOREX_FAILURE
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
      successActionType: ReaderActionTypes.FOREX_SUCCESS,
      failureActionType: ReaderActionTypes.FOREX_FAILURE
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
