import { ThemeContext } from 'styled-components'
import { transparentize } from 'polished'
import { Input } from './style'
import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  shadow?: string
  name: string
  id?: string
  ref?: React.RefObject<HTMLInputElement>
}

export const FieldInput: React.FC<Props> = (props: Props) => {
  const { name, id, handleChange, ref, ...rest } = props
  const { colors } = React.useContext(ThemeContext)

  // return <input type="text" />

  return (
    <Input
      ref={ref}
      name={name}
      id={id || name}
      onChange={handleChange}
      shadow={transparentize(0.8, colors.text)}
      {...rest}
    />
  )
}
