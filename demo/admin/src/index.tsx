import * as React from 'react'
import { render } from "react-dom"
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createBrowserHistory } from 'history';

import { setBlockchain } from './components/blockchain/blockchain'

import { Main } from './containers/main'
import { configureStore } from './store'

const history = createBrowserHistory()
const store = configureStore()
setBlockchain({store: store})

const App = () => (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Router history={history}>
          <Main />
        </Router>
      </React.Fragment>
    </Provider>
);

render(<App />, document.querySelector("#root"))
