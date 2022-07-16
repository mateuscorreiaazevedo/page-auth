import { dark, light } from '../../assets/styles/imports'
import { useTheme } from '../../contexts/theme-context'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import * as S from './style'
import React from 'react'

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  const isLight = theme.title === 'light'

  const handleTheme = () => setTheme(isLight ? dark : light)

  return (
    <S.SwitchContainer>
      <S.Switch onChange={handleTheme}/>
      {isLight ? <FaRegSun/> : <FaRegMoon/>}
    </S.SwitchContainer>
  )
}
