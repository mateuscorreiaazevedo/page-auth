import { ThemeContext } from 'styled-components'
import { transparentize } from 'polished'
import { Input } from './style'
import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  ref?: React.RefObject<HTMLInputElement>
  id?: string
  shadow?: string
}

export const FieldInput = (props: Props) => {
  const { name, id, handleChange, ref, ...rest } = props
  const { colors } = React.useContext(ThemeContext)

  return (
    <Input
      name={name}
      id={id || name}
      onChange={handleChange}
      shadow={transparentize(0.8, colors.text)}
      {...rest}
    />
  )
}
