import { ThemeContext } from 'styled-components'
import { transparentize } from 'polished'
import { Input } from './style'
import React from 'react'

type Props = {
  type: string
  nameId?: string
  handleChange?: () => void
  placeholder: string
}

export const FieldInput: React.FC<Props> = ({ type = 'text', nameId, handleChange, placeholder }) => {
  const { colors } = React.useContext(ThemeContext)

  return (
    <Input
      type={type}
      name={nameId}
      id={nameId}
      onChange={handleChange}
      placeholder={placeholder}
      shadow={transparentize(0.9, colors.text)}
      required
    />
  )
}
