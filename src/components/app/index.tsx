import { ContextThemeProvider } from '../../contexts/theme-context'
import GlobalStyle from '../../assets/styles/global.style'
import { AuthProvider } from '../../contexts/auth-context'
import { AppRoutes } from '../../routes/routes'
import { Container } from '../ui/container'
import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App () {
  return (
    <ContextThemeProvider>
      <AuthProvider>
        <Container>
            <AppRoutes/>
            <GlobalStyle />
        </Container>
      </AuthProvider>
    </ContextThemeProvider>
  )
}

export default App
