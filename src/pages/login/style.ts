import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerImages = styled.div`
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
