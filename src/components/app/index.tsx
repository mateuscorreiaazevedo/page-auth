import { ContextThemeProvider } from '../../contexts/theme-context'
import GlobalStyle from '../../assets/styles/global.style'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/routes'
import 'slick-carousel/slick/slick-theme.css'
import { ToggleMenu } from '../toggle-menu'
import 'slick-carousel/slick/slick.css'
import React from 'react'

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
