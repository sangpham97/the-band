import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { theme } from './theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
