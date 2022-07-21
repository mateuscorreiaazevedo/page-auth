import { LayoutAuthenticated } from '../../layout/authenticated'
import { HomePage } from '../../pages/home'
import { WrapRoutes } from '../wrap-routes'
import { Route } from 'react-router-dom'
import React from 'react'

export const PrivateRoutes = () => {
  return (
    <LayoutAuthenticated>
      <WrapRoutes>
        <Route index element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </WrapRoutes>
    </LayoutAuthenticated>
  )
}
