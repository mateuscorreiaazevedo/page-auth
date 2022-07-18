import { FieldInput } from '../../ui/input'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import * as S from './style'
import React from 'react'

export const LoginForm = () => {
  const [viewPass, setViewPass] = React.useState(false)
  const [typePass, setTypePass] = React.useState('password')

  const handleViewPassword = () => {
    setTypePass(typePass === 'password' ? 'text' : 'password')
    setViewPass(prev => !prev)
  }

  return (
    <S.Form>
      <S.BoxInput>
        <FieldInput type='email' placeholder='Enter with your email' nameId='email' />
      </S.BoxInput>
      <S.BoxInput>
        <FieldInput type={typePass} placeholder='Password' nameId='password' />
        <S.ButtonViewPass onClick={handleViewPassword}>
          {!viewPass ? <BsEyeSlash/> : <BsEye/>}
        </S.ButtonViewPass>
      </S.BoxInput>
    </S.Form>
  )
}
