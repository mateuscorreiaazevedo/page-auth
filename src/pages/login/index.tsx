import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Link } from 'react-router-dom'
import { ToggleMenu } from '../../components/toggle-menu'
import { LoginForm } from '../../components/form/login'

export const LoginPage = () => {
  return (
    <S.Main>
      <S.ContainerImages>
        <ToggleMenu positionLeft='10'/>
        <div>
          <ImageSlider peoplesSlider/>
        </div>
      </S.ContainerImages>
      <S.ContainerInfo>
          <div>
            <S.SignupLink>
              Not a member? <Link to='/signup'>Resgister now</Link>
            </S.SignupLink>
          </div>
          <S.HelloMessage>
            <h1>Hello Again!</h1>
            <p>Wellcome back!</p>
          </S.HelloMessage>
          <div>
            <LoginForm />
          </div>
      </S.ContainerInfo>
    </S.Main>
  )
}
