import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Link } from 'react-router-dom'
import { ToggleMenu } from '../../components/toggle-menu'
import { LoginForm } from '../../components/form/login'
import { Footer } from '../../components/footer'

export const SignupPage = () => {
  return (
    <S.Main>
      <ToggleMenu positionLeft='0'/>
      <S.ContainerInfo>
        <S.HelloMessage>
          <h1>Welcome!</h1>
          <p>Fill in the fields below to register</p>
        </S.HelloMessage>
        <div>
          <LoginForm />
        </div>
        <div>
          <S.SigninLink>
            Already have an account? <Link to='/login'>Sign In</Link>
          </S.SigninLink>
        </div>
        <Footer />
      </S.ContainerInfo>
      <S.ContainerImages>
        <div>
          <ImageSlider />
        </div>
      </S.ContainerImages>
    </S.Main>
  )
}
