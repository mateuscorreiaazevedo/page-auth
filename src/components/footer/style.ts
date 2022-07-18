import styled from 'styled-components'

export const Footer = styled.footer`
  margin-top: 180px;
  display: flex;
  align-self: center;
  gap: 15px;
  font-size: 1rem;
  color: #666;
  @media (max-width: 500px) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`

export const MailTo = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`
