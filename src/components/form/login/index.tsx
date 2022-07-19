import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { ButtonSubmit } from '../../ui/button'
import { FieldInput } from '../../ui/input'
import * as S from './style'
import React from 'react'

const initialValues = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const [typePass, setTypePass] = React.useState('password')
  const [viewPass, setViewPass] = React.useState(false)
  const [values, setValues] = React.useState(initialValues)

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleViewPassword = () => {
    setTypePass(typePass === 'password' ? 'text' : 'password')
    setViewPass(prev => !prev)
  }

  return (
    <S.Form>
      <S.BoxInput>
        <FieldInput
          type='email'
          placeholder='Enter with your email'
          nameId='email'
          handleChange={setValue}
          />
      </S.BoxInput>
      <S.BoxInput>
        <FieldInput
          type={typePass}
          placeholder='Password'
          nameId='password'
          handleChange={setValue}
        />
        <S.ButtonViewPass onClick={handleViewPassword}>
          {!viewPass ? <BsEyeSlash/> : <BsEye/>}
        </S.ButtonViewPass>
      </S.BoxInput>
      <S.BoxInput>
        <ButtonSubmit text='Sign In' />
      </S.BoxInput>
    </S.Form>
  )
}
