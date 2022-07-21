import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { ButtonSubmit } from '../../ui/button'
import { FieldInput } from '../../ui/input/'
import * as S from './style'
import React from 'react'
import { dbUsers, User } from '../../../utils/db-users'
import { useNavigate } from 'react-router-dom'

const initialValue: User = {
  fullname: '',
  email: '',
  password: ''
}

export const SignupForm = () => {
  const [viewPass, setViewPass] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<User>(initialValue)
  const [errorMessage, setErrorMessage] = React.useState<string>()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await dbUsers.create(user)
      navigate('/')
    } catch (err) {
      setErrorMessage((err as any).message)
    }
  }

  const setUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.ContainerInput>
        <FieldInput
          type='text'
          placeholder='Full Name'
          name='fullname'
          handleChange={setUserInfo}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type='email'
          placeholder='Register your email'
          name='email'
          handleChange={setUserInfo}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type={viewPass ? 'text' : 'password'}
          placeholder='Enter a password'
          name='password'
          handleChange={setUserInfo}
        />
        <S.ButtonViewPass onClick={() => setViewPass(prev => !prev)}>
          {!viewPass ? <BsEyeSlash /> : <BsEye/>}
        </S.ButtonViewPass>
      </S.ContainerInput>
      <S.ContainerInput>
        {errorMessage && (
          <p>{errorMessage}</p>
        )}
      </S.ContainerInput>
      <ButtonSubmit text='Create your account' />
    </S.Form>
  )
}
