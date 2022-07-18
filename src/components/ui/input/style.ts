import styled from 'styled-components'

type Shadow ={
  shadow: string
}

export const Input = styled.input`
  width: 340px;
  height: 52px;
  padding: 8px 15px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  transition: 400ms;
  
  &:focus {
    outline: none;
    box-shadow: 0px 10px 15px -1px ${({ shadow }: Shadow) => shadow};
  }
`
