import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

export const AppRoutes = () => {
  const [isAuth] = React.useState(false)
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Carregando...</p>}>
        {isAuth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </BrowserRouter>
  )
}
