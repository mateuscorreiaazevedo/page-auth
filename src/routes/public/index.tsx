import React from 'react'
import { Route } from 'react-router-dom'
import { LayoutUnAuthenticated } from '../../layout/unAuthenticated'
import { LoginPage } from '../../pages/login'
import { SignupPage } from '../../pages/sign-up'
import { Redirect } from '../redirect'
import { WrapRoutes } from '../wrap-routes'

export const PublicRoutes = () => {
  return (
    <LayoutUnAuthenticated>
      <WrapRoutes>
        <Route index element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='*' element={<Redirect/>}/>
      </WrapRoutes>
    </LayoutUnAuthenticated>
  )
}
