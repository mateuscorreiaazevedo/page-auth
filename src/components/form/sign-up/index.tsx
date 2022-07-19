import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { FieldInput } from '../../ui/input/'
import * as S from './style'
import React from 'react'
import { ButtonSubmit } from '../../ui/button'
import { UserProps } from '../../../types/user'
import { hash } from '../../../types/hashId'

const initialValue: UserProps = {
  email: '',
  fullName: '',
  password: '',
  id: ''
}

export const SignupForm = () => {
  const [users] = React.useState<UserProps[]>(() => {
    const storageUser = localStorage.getItem('users')
    const initialArray: UserProps[] = []

    if (storageUser) {
      return JSON.parse(storageUser)
    } else {
      return initialArray
    }
  })
  const [userValue, setUserValue] = React.useState<UserProps>(initialValue)
  const [typePass, setTypePass] = React.useState('password')
  const [viewPass, setViewPass] = React.useState(false)

  const handleViewPassword = () => {
    setTypePass(typePass === 'password' ? 'text' : 'password')
    setViewPass(prev => !prev)
  }

  const setUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserValue(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = await hash()
    localStorage.setItem('users', JSON.stringify([
      ...users,
      { ...userValue, id }
    ]))

    setUserValue(initialValue)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.ContainerInput>
        <FieldInput
          type='text'
          placeholder='Full Name'
          nameId='fullName'
          handleChange={setUser}
          defValue={userValue.fullName}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type='email'
          placeholder='Register your email'
          nameId='email'
          handleChange={setUser}
          defValue={userValue.email}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type={typePass}
          placeholder='Enter a password'
          nameId='password'
          handleChange={setUser}
          defValue={userValue.password}
        />
        <S.ButtonViewPass onClick={handleViewPassword}>
          {!viewPass ? <BsEyeSlash /> : <BsEye/>}
        </S.ButtonViewPass>
      </S.ContainerInput>
      <ButtonSubmit text='Create your account' />
    </S.Form>
  )
}
