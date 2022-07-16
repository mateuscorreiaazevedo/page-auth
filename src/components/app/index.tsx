import { ContextThemeProvider } from '../../contexts/theme-context'
import GlobalStyle from '../../assets/styles/global.style'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/routes'
import React from 'react'
import { ToggleMenu } from '../toggle-menu'

function App () {
  return (
    <ContextThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
        <ToggleMenu/>
        <GlobalStyle />
      </BrowserRouter>
    </ContextThemeProvider>
  )
}

export default App
