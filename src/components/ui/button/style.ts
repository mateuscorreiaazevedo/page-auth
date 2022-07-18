import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  cursor: pointer;
  border: none;
  width: 340px;
  height: 52px;
  border-radius: 12px;
  font-size: 1.1rem;
  margin-top: 25px;
`
