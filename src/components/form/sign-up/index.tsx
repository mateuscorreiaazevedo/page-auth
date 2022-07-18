import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { FieldInput } from '../../ui/input/'
import * as S from './style'
import React from 'react'
import { ButtonSubmit } from '../../ui/button'

export const SignupForm = () => {
  const [typePass, setTypePass] = React.useState('password')
  const [viewPass, setViewPass] = React.useState(false)

  const handleViewPassword = () => {
    setTypePass(typePass === 'password' ? 'text' : 'password')
    setViewPass(prev => !prev)
  }

  return (
    <S.Form>
      <S.ContainerInput>
        <FieldInput type='text' placeholder='Full Name' nameId='fullName' />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput type='email' placeholder='Register your email' nameId='email' />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput type={typePass} placeholder='Enter a password' nameId='password'/>
        <S.ButtonViewPass onClick={handleViewPassword}>
          {!viewPass ? <BsEyeSlash /> : <BsEye/>}
        </S.ButtonViewPass>
      </S.ContainerInput>
      <ButtonSubmit text='Create your account' />
    </S.Form>
  )
}
