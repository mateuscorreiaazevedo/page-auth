import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Link } from 'react-router-dom'
import { LoginForm } from '../../components/form/login'

export const LoginPage = () => {
  return (
    <S.Main>
      <S.ContainerImages>
        <div>
          <ImageSlider peoplesSlider/>
        </div>
      </S.ContainerImages>
      <S.ContainerForm>
        <p>
          Not a member? <Link to='/signup'>Resgister now</Link>
        </p>
        <LoginForm />
      </S.ContainerForm>
    </S.Main>
  )
}
