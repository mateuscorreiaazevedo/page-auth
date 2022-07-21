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
  const [viewPass, setViewPass] = React.useState<boolean>(false)
  const [values, setValues] = React.useState(initialValues)

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(values)
    const { name, value } = e.target
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <S.Form>
      <S.BoxInput>
        <FieldInput
          type='email'
          placeholder='Enter with your email'
          name='email'
          handleChange={setValue}
          />
      </S.BoxInput>
      <S.BoxInput>
        <FieldInput
          type={viewPass ? 'text' : 'password'}
          placeholder='Password'
          name='password'
          handleChange={setValue}
        />
        <S.ButtonViewPass onClick={() => setViewPass(prev => !prev)}>
          {!viewPass ? <BsEyeSlash/> : <BsEye/>}
        </S.ButtonViewPass>
      </S.BoxInput>
      <S.BoxInput>
        <ButtonSubmit text='Sign In' />
      </S.BoxInput>
    </S.Form>
  )
}
