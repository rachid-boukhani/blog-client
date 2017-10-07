import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

render((
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
