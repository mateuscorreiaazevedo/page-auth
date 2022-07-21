import { ContextThemeProvider } from '../../contexts/theme-context'
import GlobalStyle from '../../assets/styles/global.style'
import { AppRoutes } from '../../routes/routes'
import { Container } from '../ui/container'
import React from 'react'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
function App () {
  return (
    <ContextThemeProvider>
      <Container>
        <AppRoutes/>
        <GlobalStyle />
      </Container>
    </ContextThemeProvider>
  )
}

export default App
