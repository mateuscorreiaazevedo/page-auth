import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    width: 100%;
    min-height: 100vh;
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }
`
