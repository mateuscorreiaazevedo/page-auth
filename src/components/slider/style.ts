import styled from 'styled-components'
type Props = {
  centralize?: boolean
}
export const CentralizeImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ centralize = false }: Props) => centralize ? '0 2rem' : '0 8rem'};
  
`
