import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Link } from 'react-router-dom'
import { ToggleMenu } from '../../components/toggle-menu'
import { LoginForm } from '../../components/form/login'

export const SignupPage = () => {
  return (
    <S.Main>
      <ToggleMenu positionLeft='0'/>
      <S.ContainerInfo>
          <div>
            <S.SignupLink>
              Already have an account? <Link to='/login'>Sign In</Link>
            </S.SignupLink>
          </div>
          <S.HelloMessage>
            <h1>Hello Again!</h1>
            <p>Wellcome back!</p>
          </S.HelloMessage>
          <div>
            <LoginForm />
          </div>
          <S.Footer>
            <p>Copyright® - 2022</p>
            <p>
              developed by: <a href="mailto:mateuscorreiaazevedo@gmail.com">Mateus Correia Azevedo</a>
            </p>
          </S.Footer>
      </S.ContainerInfo>
      <S.ContainerImages>
        <div>
          <ImageSlider />
        </div>
      </S.ContainerImages>
    </S.Main>
  )
}
