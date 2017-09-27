import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

render((
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()
