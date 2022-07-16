import styled from 'styled-components'

export const SwitchContainer = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`
export const Switch = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  appearance: none;
`
