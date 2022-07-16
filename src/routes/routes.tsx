import { Route, Routes } from 'react-router-dom'
import { SignupPage } from '../pages/sign-up'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
import { Redirect } from './redirect'
import React from 'react'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/*' element={<Redirect/>} />
    </Routes>
  )
}
