import { ThemeContext } from 'styled-components'
import { transparentize } from 'polished'
import { Input } from './style'
import React from 'react'

type Props = {
  defValue?: string
  type: string
  nameId?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export const FieldInput: React.FC<Props> = (props) => {
  const { type = 'text', nameId, handleChange, placeholder, defValue } = props
  const { colors } = React.useContext(ThemeContext)

  return (
    <Input
      defaultValue={defValue}
      type={type}
      name={nameId}
      id={nameId}
      onChange={handleChange}
      placeholder={placeholder}
      shadow={transparentize(0.8, colors.text)}
      required
    />
  )
}
