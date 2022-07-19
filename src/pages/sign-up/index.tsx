import { SignupForm } from '../../components/form/sign-up'
import { ToggleMenu } from '../../components/toggle-menu'
import { ImageSlider } from '../../components/slider'
import { Footer } from '../../components/footer'
import { Link } from 'react-router-dom'
import * as S from './style'
import React from 'react'

export const SignupPage = () => {
  return (
    <S.Main>
      <ToggleMenu positionLeft='0' className='side-menu'/>
      <S.ContainerInfo>
        <S.HelloMessage>
          <h1>Welcome!</h1>
          <p>Fill in the fields below to register</p>
        </S.HelloMessage>
        <div>
          <SignupForm />
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
