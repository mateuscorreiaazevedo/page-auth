import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`
export const BoxInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
export const ButtonViewPass = styled.div`
  position: absolute;
  right: 20px;
  color: #999;
  svg {
    cursor: pointer;
  }
`
export const MessagePass = styled.p`
  font-size: .75rem;
  font-weight: 600;
  width: 340px;
  color: #f00;
`
