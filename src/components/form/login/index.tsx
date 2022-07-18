import { FieldInput } from '../../ui/input'
import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.div`
`
export const LoginForm = () => {
  return (
    <ContainerForm>
      <form>
        <FieldInput type='email' placeholder='Enter email' nameId='email' />
      </form>
    </ContainerForm>
  )
}
