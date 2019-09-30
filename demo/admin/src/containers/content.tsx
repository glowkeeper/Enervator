import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Info } from './pages/info/info'
import { InfoTypes } from './pages/info/types'

import { BlockchainInfo } from './pages/blockchain/blockchainInfo'

import { ExchangeRateWriter } from './pages/enervator/writer/exchangeRate'
import { ExchangeRatesReader } from './pages/enervator/reader/exchangeRates'

import { SupplyWriter } from './pages/enervator/writer/supply'
import { TPESWriter } from './pages/enervator/writer/tPES'
import { PerCapitaEnergyWriter } from './pages/enervator/writer/perCapitaEnergy'

import { EnervatorReader } from './pages/enervator/reader/enervatorParams'

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

class AppContent extends React.Component {

  render() {

    return (
      <Switch>

       /* Main Links */

        <Route
          name={Paths.home}
          exact path={PathConfig.home}
          render={() => <Info type={InfoTypes.HOME} />}
        />

        <Route
          name={Paths.blockchain}
          exact path={PathConfig.blockchain}
          render= {() => <BlockchainInfo />}
        />

        <Route
          name={Paths.about}
          exact path={PathConfig.about}
          render={() => <Info type={InfoTypes.ABOUT} />}
        />

        <Route
          name={Paths.overview}
          path={PathConfig.overview}
          render={() => <Info type={InfoTypes.OVERVIEW} />}
        />

        <Route
          name={Paths.help}
          path={PathConfig.help}
          render={() => <Info type={InfoTypes.HELP} />}
        />

        <Route
          name={Paths.writer}
          path={PathConfig.writer}
          render={() => <Info type={InfoTypes.WRITE} />}
        />

        <Route
          name={Paths.reader}
          path={PathConfig.reader}
          render={() => <Info type={InfoTypes.READ} />}
        />

        /* Exchange Rate Links */

        <Route
          name={Paths.exchangeRateWriter}
          path={PathConfig.exchangeRateWriter}
          render={() => <ExchangeRateWriter />}
        />

        <Route
          name={Paths.exchangeRatesReader}
          path={PathConfig.exchangeRatesReader}
          render={() => <ExchangeRatesReader />}
        />

        /* Token Supply */

        <Route
          name={Paths.supplyWriter}
          path={PathConfig.supplyWriter}
          render={() => <SupplyWriter />}
        />

        /* TPES */

        <Route
          name={Paths.TPESWriter}
          path={PathConfig.TPESWriter}
          render={() => <TPESWriter />}
        />

        /* Per Capita Energy */

        <Route
          name={Paths.perCapitaEnergyWriter}
          path={PathConfig.perCapitaEnergyWriter}
          render={() => <PerCapitaEnergyWriter />}
        />

        /* Read Enervator Parameters */

        <Route
          name={Paths.enervatorReportReader}
          path={PathConfig.enervatorReportReader}
          render={() => <EnervatorReader />}
        />

      </Switch>
    )
  }
}

export const Content = AppContent
