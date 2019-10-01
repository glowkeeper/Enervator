import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Info } from './pages/info/info'
import { InfoTypes } from './pages/info/types'

import { BlockchainInfo } from './pages/blockchain/blockchainInfo'

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

class AppContent extends React.Component {

  render() {

    return (
      <Switch>

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

      </Switch>
    )
  }
}

export const Content = AppContent
