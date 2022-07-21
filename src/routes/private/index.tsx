import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/home'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage/>} />
      <Route path='*' element={<HomePage/>} />
    </Routes>
  )
}
