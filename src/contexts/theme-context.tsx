import { DefaultTheme, ThemeProvider } from 'styled-components'
import { themeStorage } from '../utils/themeStorage'
import { light } from '../assets/styles/imports'
import React from 'react'

type ThemeProps = {
  theme: DefaultTheme
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
}

type ProviderProps = {
  children: React.ReactNode
}

const Context = React.createContext<ThemeProps | null>(null)

export const ContextThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = themeStorage<DefaultTheme>(light)

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export const useTheme = (): ThemeProps => {
  const context = React.useContext(Context)

  if (!context) throw new Error("useTheme error of encapsuled on provider 'ContextThemeProvider'")

  return { ...context }
}
