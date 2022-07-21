import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/login'
import { SignupPage } from '../../pages/sign-up'
import { Redirect } from '../redirect'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='*' element={<Redirect/>} />
    </Routes>
  )
}
