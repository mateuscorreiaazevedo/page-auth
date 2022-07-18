import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <S.Main>
      <S.ContainerImages>
        <div>
          <ImageSlider peoplesSlider/>
        </div>
      </S.ContainerImages>
      <S.ContainerForm>
        <p>Not a member? <Link to='/signup'>Resgister now</Link></p>
      </S.ContainerForm>
    </S.Main>
  )
}
