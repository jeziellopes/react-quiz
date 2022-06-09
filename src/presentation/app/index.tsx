import { makeReduxStore } from '@main/factories/redux'
import Routes from '@presentation/routes'
import { GlobalStyle } from '@presentation/styles/global'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const store = makeReduxStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
)

export default App
