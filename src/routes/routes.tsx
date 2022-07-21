import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
import React from 'react'

export const AppRoutes = () => {
  const [isAuth] = React.useState(false)
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>carregando...</p>}>
        {isAuth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </BrowserRouter>
  )
}
