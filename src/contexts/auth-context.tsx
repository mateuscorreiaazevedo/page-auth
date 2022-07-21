import React from 'react'

type AuthProviderType ={
  children: React.ReactNode
}

const Context = React.createContext(null)

export const AuthProvider = ({ children }: AuthProviderType) => {
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('useAuth error! problema no encapsulamento do AuthProvider')

  return { ...context }
}
