import * as React from 'react'
import { render } from "react-dom"
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createBrowserHistory } from 'history';

import { ThemeProvider } from '@material-ui/styles';

import { theme } from './styles/theme'

import { setBlockchain } from './components/blockchain/blockchain'

import { Main } from './containers/main'
import { configureStore } from './store'

const history = createBrowserHistory()
const store = configureStore()
setBlockchain({store: store})

const App = () => (
    <Provider store={store}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Main />
          </Router>
        </ThemeProvider>
      </React.Fragment>
    </Provider>
);

render(<App />, document.querySelector("#root"))
