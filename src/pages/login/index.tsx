import * as S from './style'
import React from 'react'
import { ImageSlider } from '../../components/slider'
import { Container } from '../../components/ui/container'

export const LoginPage = () => {
  return (
    <S.Main>
      <Container>
        <S.ContainerImages>
          <div>
            <ImageSlider peoplesSlider/>
          </div>
        </S.ContainerImages>
      </Container>
    </S.Main>
  )
}
