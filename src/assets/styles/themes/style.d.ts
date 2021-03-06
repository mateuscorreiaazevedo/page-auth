import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      terciary: string
      background: string
      inputBackground: string
      text: string
    }
  }

}
