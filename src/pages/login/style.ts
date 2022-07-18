import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  @media (max-width: 790px) {
    .menu-side {
      left: 0;
    }
  }
`

export const ContainerImages = styled.section`
  background: ${p => p.theme.colors.primary};
  width: 40%;
  margin: 10px;
  border-radius: 10px;
  height: 903px;
  padding: 250px 0;
  img {
    transform: scale(0.8);
  }
  @media (max-width: 1045px) {
    width: 45%;
    img {
      transform: scale(0.5);
    }
  }
  @media (max-width: 790px) {
    display: none;
  }
`

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-right: 20px;
  margin-top: 60px;
  flex-grow: 1;
`
export const SignupLink = styled.p`
  font-size: .8rem;
  text-align: end;
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const HelloMessage = styled.div`
  align-self: center;
  text-align: center;
  transition: 400ms;
  h1 {
    font-size: 2rem;
    margin-bottom: 25px;
  }
  p {
    letter-spacing: 0.15rem;
    font-weight: 200;
  }
`
export const Footer = styled.footer`
  margin-top: 180px;
  display: flex;
  align-self: center;
  gap: 15px;
  font-size: 1rem;
  color: #666;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
  @media (max-width: 500px) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`
