import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  @media (min-width: 1900px) {
    .side-menu {
      left: -33.5%;
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
  gap: 5rem;
  margin-right: 20px;
  margin-top: 60px;
  flex-grow: 1;
`
export const SigninLink = styled.p`
  font-size: .8rem;
  text-align: center;
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
    font-size: .85rem;
    font-weight: 200;
  }
`
