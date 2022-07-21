import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChildrenType } from '../types/children'

export const WrapRoutes = ({ children }: ChildrenType) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<h1>Página não encontrada...</h1>}/>
    </Routes>
  )
}
