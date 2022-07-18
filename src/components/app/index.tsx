import { ContextThemeProvider } from '../../contexts/theme-context'
import GlobalStyle from '../../assets/styles/global.style'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../../routes/routes'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import React from 'react'
import { Container } from '../ui/container'

function App () {
  return (
    <ContextThemeProvider>
      <Container>
        <BrowserRouter>
          <AppRoutes/>
          <GlobalStyle />
        </BrowserRouter>
      </Container>
    </ContextThemeProvider>
  )
}

export default App
