import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import Markdown from 'react-markdown'

import { getDictEntries } from '../../../../components/io/dict'

import { initialise } from '../../../../store/enervator/reader/actions'
import { getExchangeRates } from '../../../../store/enervator/reader/exchangeRates/actions'

import { ApplicationState } from '../../../../store'
import { ActionProps } from '../../../../store/types'
import { ExchangeRateReportProps } from '../../../../store/enervator/types'


import { ExchangeRates as ExchangeRateStrings } from '../../../../utils/strings'

interface ExchangeRateProps {
  exchangeRates: ExchangeRateReportProps
}

interface ExchangeRateDispatchProps {
  initialise: () => void
  getExchangeRates: () => void
}

type ExchangeRateReaderProps =  ExchangeRateProps & ExchangeRateDispatchProps

class ExchangeRates extends React.Component<ExchangeRateReaderProps> {

  public static defaultProps = {
    initialise: () => {},
    getExchangeRates: () => {}
  }

  constructor (props: ExchangeRateReaderProps) {
    super(props)
  }

  componentDidMount() {
    this.props.initialise()
    this.props.getExchangeRates()
  }

  render() {

    const xs = getDictEntries(this.props.exchangeRates)
    return (
      <div>
        <h2>{ExchangeRateStrings.headingExchangeRatesReader}</h2>
        <hr />
        <h3>{ExchangeRateStrings.exchangeRateDetails}</h3>
        <Markdown escapeHtml={false} source={xs} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState): ExchangeRateProps => {
  //console.log(state.orgReader)
  return {
    exchangeRates:  state.reader.data as ExchangeRateReportProps
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): ExchangeRateDispatchProps => {
  return {
    initialise: () => dispatch(initialise()),
    getExchangeRates: () => dispatch(getExchangeRates())
  }
}

export const ExchangeRatesReader = connect<ExchangeRateProps, ExchangeRateDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRates)
