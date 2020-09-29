import 'styled-component';

declare module 'styled-component' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,
      background: string,
      text: string,
    }
  }
}