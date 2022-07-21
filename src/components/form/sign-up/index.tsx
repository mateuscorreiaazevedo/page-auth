import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { ButtonSubmit } from '../../ui/button'
import { FieldInput } from '../../ui/input/'
import * as S from './style'
import React from 'react'

export const SignupForm = () => {
  const [viewPass, setViewPass] = React.useState<boolean>(false)

  return (
    <S.Form>
      <S.ContainerInput>
        <FieldInput
        type='text'
        placeholder='Name'
        name='name'
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
        type='text'
        placeholder='Last Name'
        name='lastname'
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
        type='email'
        placeholder='Register your email'
        name='email'
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
        type={viewPass ? 'text' : 'password'}
        placeholder='Enter a password'
        name='password'
        />
        <S.ButtonViewPass onClick={() => setViewPass(prev => !prev)}>
          {!viewPass ? <BsEyeSlash /> : <BsEye/>}
        </S.ButtonViewPass>
      </S.ContainerInput>
      <ButtonSubmit text='Create your account' />
    </S.Form>
  )
}
