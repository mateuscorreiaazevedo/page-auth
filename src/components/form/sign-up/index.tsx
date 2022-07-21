import { useSetUsers } from '../../../hooks/useSetUsers'
import images from '../../../assets/images/imports'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { UserProps } from '../../../types/user'
import { ButtonSubmit } from '../../ui/button'
import { FieldInput } from '../../ui/input/'
import * as S from './style'
import React from 'react'

const initialValue: UserProps = {
  fullName: '',
  email: '',
  password: '',
  id: 0,
  token: '',
  imageProfile: images.userIcon
}

export const SignupForm = () => {
  const [typePass, setTypePass] = React.useState('password')
  const [viewPass, setViewPass] = React.useState(false)
  const [user, setUser] = React.useState<UserProps>(initialValue)
  const {
    handleSubmit,
    loadStorage,
    refresh,
    errorMessage
  } = useSetUsers({ initialValue, setUser, user })

  const handleViewPassword = () => {
    setTypePass(typePass === 'password' ? 'text' : 'password')
    setViewPass(prev => !prev)
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

  React.useEffect(() => {
    loadStorage()
    setViewPass(false)
  }, [refresh])

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.ContainerInput>
        <FieldInput
          type='text'
          placeholder='Full Name'
          nameId='fullName'
          handleChange={setUserInfo}
          defValue={user.fullName}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type='email'
          placeholder='Register your email'
          nameId='email'
          handleChange={setUserInfo}
          defValue={user.email}
        />
      </S.ContainerInput>
      <S.ContainerInput>
        <FieldInput
          type={typePass}
          placeholder='Enter a password'
          nameId='password'
          handleChange={setUserInfo}
          defValue={user.password}
        />
        <S.ButtonViewPass onClick={handleViewPassword}>
          {!viewPass ? <BsEyeSlash /> : <BsEye/>}
        </S.ButtonViewPass>
      </S.ContainerInput>
      <S.ContainerInput>
        {errorMessage && (
          <p>A senha deve conter no mínimo 6 caracteres</p>
        )}
      </S.ContainerInput>
      <ButtonSubmit text='Create your account' />
    </S.Form>
  )
}
