import { FieldInput } from '../../ui/input'
import * as S from './style'
import React from 'react'

export const LoginForm = () => {
  return (
    <S.Form>
      <FieldInput type='email' placeholder='Enter with your email' nameId='email' />
      <FieldInput type='password' placeholder='Password' nameId='password' />
    </S.Form>
  )
}
