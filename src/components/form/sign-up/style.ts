import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  p {
    position: absolute;
    left: -140px;
    width: 320px;
    color: #f00;
    font-size: .78rem;
    animation: message 300ms;
    @keyframes message {
      from {
        opacity: 0%;
      }
    }
  }
`

export const ButtonViewPass = styled.span`
  position: absolute;
  right: 20px;
  color: #999;
  svg {
    cursor: pointer;
  }
`
