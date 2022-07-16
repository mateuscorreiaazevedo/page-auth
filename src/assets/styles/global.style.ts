import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }
`
